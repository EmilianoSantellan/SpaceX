import React from 'react';
import { View, ImageBackground, PanResponder, LayoutAnimation, NativeModules } from 'react-native';

var {
    UIManager,
} = NativeModules;

import { styles } from './styles';

// Modules
import StorageManager from '../../application/persist/localStorageManager';
import Grid from '../../application/utils/grid.class';
import Tile from '../../application/utils/tile.class';

// Views
import Heading from '../../application/common/components/heading/heading';
import AboveGame from '../components/game/above/aboveGame';
import GameContainer from '../components/game/container/gameContainer';

// Dimensions
import Dimensions from '../../application/utils/dimensions';
const { height, width } = Dimensions.get('window');

// StorageManager
const storageManager = new StorageManager();

interface GameProps {
    startTiles: number;
    size: number;
}

interface State {
    tiles: any[];
    score: number;
    over: boolean;
    win: boolean;
    keepPlaying: boolean;
    grid: any;
    size: number;
    best?: number;
    won?: boolean;
}

interface Traversal {
    x: number[];
    y: number[];
}

class Container extends React.Component<GameProps, State> {
    moving: boolean = false;
    won: boolean = false;
    over: boolean = false;
    keepPlaying: boolean = false;
    score: number = 0;
    startTiles: number = 0;
    grid: any;

    _panResponder: any;

    constructor(props: GameProps) {
        super(props);
        this.state = { tiles: [], score: 0, over: false, win: false, keepPlaying: false, grid: new Grid(props.size), size: props.size }
    }

    componentWillMount() {
        this.setup()
        var _self = this;
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gestureState) => _self._handleStartShouldSetPanResponder(e, gestureState),
            onMoveShouldSetPanResponder: (e, gestureState) => _self._handleMoveShouldSetPanResponder(e, gestureState),
            onPanResponderGrant: (e, gestureState) => _self._handlePanResponderGrant(e, gestureState),
            onPanResponderMove: (e, gestureState) => _self._handlePanResponderMove(e, gestureState),
            onPanResponderRelease: (e, gestureState) => _self._handlePanResponderEnd(e, gestureState)
        })
        this.moving = false;
        // Animate creation
        UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    _handleStartShouldSetPanResponder(e: Object, gestureState: any): boolean {
        return true;
    }

    _handleMoveShouldSetPanResponder(e: Object, gestureState: any): boolean {
        return true;
    }

    _handlePanResponderGrant(e: Object, gestureState: any) {
        if (this.moving == false) {
            this.moving = true;
        }
    }

    _handlePanResponderMove(e: Object, gestureState: any) { }

    _handlePanResponderEnd(e: Object, gestureState: any) {
        if (this.moving) {
            this.moving = false;

            var dx = gestureState.dx;
            var dy = gestureState.dy;
            var absDx = dx > 0 ? dx : -dx;
            var absDy = dy > 0 ? dy : -dy;
            var canMove = absDx > absDy ? absDx - absDy > 10 : absDx - absDy < -10;
            if (canMove) {
                // (right : left) : (down : up)
                this.move(absDx > absDy ? (dx > 0 ? 1 : 3) : (dy > 0 ? 2 : 0));
            }
        }
    }

    render() {
        var tiles = this.state.tiles ? this.state.tiles : [];
        var _self = this;
        return (
            <View {...this._panResponder.panHandlers} style={styles.container}>
                <ImageBackground source={require('../../assets/images/background.png')} resizeMode="cover" style={styles.image}>
                    <Heading score={this.state.score} best={this.state.best}></Heading>
                    <AboveGame onRestart={() => _self.restart()}></AboveGame>
                    <GameContainer size={this.state.size} tiles={this.state.tiles} won={this.state.won} over={this.state.over}
                        onKeepGoing={() => _self.keepGoing()} onTryAagin={() => _self.restart()}>
                    </GameContainer>
                </ImageBackground>
            </View>
        );
    }

    getRandomTiles(): any[] {
        var ret = [];
        for (var i = 0; i < this.props.startTiles; i++) {
            ret.push(this.getRandomTile())
        }
        return ret;
    }

    getRandomTile(): any {
        var value = Math.random() < 0.9 ? 2 : 4;
        var pos = this.grid.randomAvailableCell();
        var tile = new Tile(pos, value);
        this.grid.insertTile(tile);
        return {
            value: value,
            x: pos.x,
            y: pos.y,
            prog: tile.prog
        };
    }

    continueGame(): void {
        this.won = false;
        this.over = false;
        this.setState({ won: this.won, over: this.over });
    }

    restart(): void {
        storageManager.clearGameState();
        this.continueGame();  // Clear the game won/lost message
        this.setup()
    }

    // Keep playing after winning (allows going over 2048)
    keepGoing(): void {
        this.keepPlaying = true;
        this.continueGame();  // Clear the game won/lost message
    }

    // Return true if the game is lost, or has won and the user hasn't kept playing
    isGameTerminated(): any {
        return this.over || (this.won && !this.keepPlaying);
    }

    setGameState(previousState: any): void {
        // Reload the game from a previous game if present
        if (previousState) {
            this.grid = new Grid(previousState.grid.size, previousState.grid.cells); // Reload grid
            this.score = parseInt(previousState.score);
            this.over = (previousState.over == true || previousState.over == 'true');
            this.won = (previousState.won == true || previousState.won == 'true');
            this.keepPlaying = (previousState.keepPlaying == true || previousState.keepPlaying == 'true');
        } else {
            this.grid = new Grid(this.state.size);
            this.score = 0;
            this.over = false;
            this.won = false;
            this.keepPlaying = false;
        }
        var _self = this;
        storageManager.getBestScore((bestScore: any) => {
            // Animate the update
            LayoutAnimation.easeInEaseOut();
            _self.setState({ score: _self.score, best: bestScore, tiles: _self.getRandomTiles(), over: _self.over, won: _self.won });
        })
    }

    // Set up the game
    setup(): void {
        var _self = this;
        storageManager.getGameState((result: any) => _self.setGameState(result));
    }

    // Set up the initial tiles to start the game with
    addStartTiles(): void {
        for (var i = 0; i < this.startTiles; i++) {
            this.addRandomTile()
        }
    }

    // Adds a tile in a random position
    addRandomTile(): void {
        var cellsAvailable = this.grid.cellsAvailable()

        if (cellsAvailable) {
            var value = Math.random() < 0.9 ? 2 : 4;
            var tile = new Tile(this.grid.randomAvailableCell(), value)

            this.grid.insertTile(tile)
        }
    }

    // Sends the updated grid to the actuator
    actuate() {
        // Clear the state when the game is over (game over only, not win)
        if (this.over) {
            storageManager.clearGameState();
        } else {
            storageManager.setGameState(this.serialize());
        }

        // this.actuator.actuate(this.grid, {
        //   score:      this.score,
        //   over:       this.over,
        //   won:        this.won,
        //   bestScore:  storageManager.getBestScore(),
        //   terminated: this.isGameTerminated()
        // });

        var tiles: any[] = [];
        this.grid.cells.forEach((column: any[]) => {
            column.forEach((cell: any) => {
                if (cell) {
                    tiles.push({
                        x: cell.x,
                        y: cell.y,
                        value: cell.value,
                        prog: cell.prog
                    });
                }
            });
        });
        var _self = this;
        storageManager.getBestScore((bestScore: any) => {
            // Animate the update
            LayoutAnimation.easeInEaseOut();
            if (bestScore < _self.score) {
                storageManager.setBestScore(_self.score);
                _self.setState({ score: _self.score, best: _self.score, tiles: tiles, won: _self.won, over: _self.over });
            }
            else {
                _self.setState({ score: _self.score, tiles: tiles, won: _self.won, over: _self.over });
            }
        });
    }

    // Represent the current game as an object
    serialize(): any {
        return {
            grid: this.grid.serialize(),
            score: this.score,
            over: this.over,
            won: this.won,
            keepPlaying: this.keepPlaying,
        }
    }

    // Save all tile positions and remove merger info
    prepareTiles(): void {
        this.grid.eachCell((x: any, y: any, tile: any) => {
            if (tile) {
                tile.mergedFrom = null;
                tile.savePosition();
            }
        });
    }

    // Move a tile and its representation
    moveTile(tile: any, cell: any): void {
        this.grid.cells[tile.x][tile.y] = null
        this.grid.cells[cell.x][cell.y] = tile
        tile.updatePosition(cell);
    }

    // Move tiles on the grid in the specified direction
    move(direction: any): void {
        // 0: up, 1: right, 2: down, 3: left
        var self = this;
        if (this.isGameTerminated()) return; // Don't do anything if the game's over
        var cell, tile;
        var vector = this.getVector(direction);
        var traversals = this.buildTraversals(vector);
        var moved = false;
        // Save the current tile positions and remove merger information
        this.prepareTiles();
        // Traverse the grid in the right direction and move tiles
        traversals.x.forEach((x: any) => {
            traversals.y.forEach((y: any) => {
                cell = { x: x, y: y };
                tile = self.grid.cellContent(cell);

                if (tile) {
                    var positions = self.findFarthestPosition(cell, vector);
                    var next = self.grid.cellContent(positions.next);

                    // Only one merger per row traversal?
                    if (next && next.value === tile.value && !next.mergedFrom) {
                        var merged = new Tile(positions.next, tile.value * 2);
                        merged.mergedFrom = [tile, next];

                        self.grid.insertTile(merged);
                        self.grid.removeTile(tile);

                        // Converge the two tiles' positions
                        tile.updatePosition(positions.next);

                        // Update the score
                        self.score += merged.value;

                        // The mighty 2048 tile
                        if (merged.value === 2048) self.won = true;
                    } else {
                        self.moveTile(tile, positions.farthest);
                    }

                    if (!self.positionsEqual(cell, tile)) {
                        moved = true; // The tile moved from its original cell!
                    }
                }
            });
        });

        if (moved) {
            this.addRandomTile();
            if (!this.movesAvailable()) {
                this.over = true; // Game over!
            }
            this.actuate();
        }
    }

    // Get the vector representing the chosen direction
    getVector(direction: number) {
        // Vectors representing tile movement
        const map = [
            { x: 0, y: -1 }, // Up
            { x: 1, y: 0 },  // Right
            { x: 0, y: 1 },  // Down
            { x: -1, y: 0 },   // Left
        ]
        return map[direction];
    }

    // Build a list of positions to traverse in the right order
    buildTraversals(vector: any) {
        var traversals: Traversal = { x: [], y: [] };

        for (var pos = 0; pos < this.state.size; pos++) {
            traversals.x.push(pos);
            traversals.y.push(pos);
        }

        // Always traverse from the farthest cell in the chosen direction
        if (vector.x === 1) traversals.x = traversals.x.reverse();
        if (vector.y === 1) traversals.y = traversals.y.reverse();

        return traversals;
    }

    findFarthestPosition(cell: any, vector: any) {
        var previous;
        // Progress towards the vector direction until an obstacle is found
        do {
            previous = cell;
            cell = { x: previous.x + vector.x, y: previous.y + vector.y };
        } while (this.grid.withinBounds(cell) && this.grid.cellAvailable(cell));

        return {
            farthest: previous,
            next: cell // Used to check if a merge is required
        };
    }

    movesAvailable() {
        return this.grid.cellsAvailable() || this.tileMatchesAvailable()
    }

    // Check for available matches between tiles (more expensive check)
    tileMatchesAvailable(): boolean {
        var self = this;

        var tile;

        for (var x = 0; x < this.state.size; x++) {
            for (var y = 0; y < this.state.size; y++) {
                tile = this.grid.cellContent({ x: x, y: y });

                if (tile) {
                    for (var direction = 0; direction < 4; direction++) {
                        var vector = self.getVector(direction);
                        var cell = { x: x + vector.x, y: y + vector.y };

                        var other = self.grid.cellContent(cell);

                        if (other && other.value === tile.value) {
                            return true; // These two tiles can be merged
                        }
                    }
                }
            }
        }

        return false;
    }

    positionsEqual(first: any, second: any) {
        return first.x === second.x && first.y === second.y
    }
}

export default Container;