import Tile from './tile.class';
import { IPosition } from '../common/interfaces/position.interface';

export default class Grid {
    size: number;
    cells: any;

    constructor(size: number, previousState?: any) {
        this.size = size;
        this.cells = previousState ? this.fromState(previousState) : this.empty();
    }

    empty = () => {
        var cells = [];

        for (var x = 0; x < this.size; x++) {
            var row: any[] = cells[x] = [];

            for (var y = 0; y < this.size; y++) {
                row.push(null);
            }
        }

        return cells;
    };

    fromState = (state: any) => {
        var cells = [];

        for (var x = 0; x < this.size; x++) {
            var row: any[] = cells[x] = [];

            for (var y = 0; y < this.size; y++) {
                var tile = state[x][y];
                row.push(tile ? new Tile(tile.position, tile.value) : null);
            }
        }

        return cells;
    };

    randomAvailableCell = () => {
        var cells = this.availableCells();

        if (cells.length) {
            return cells[Math.floor(Math.random() * cells.length)];
        }
    };

    availableCells = (): any[] => {
        var cells: any[] = [];

        this.eachCell((x: any, y: any, tile: any) => {
            if (!tile) {
                cells.push({ x: x, y: y });
            }
        });

        return cells;
    };

    eachCell = (callback: Function): void => {
        for (var x = 0; x < this.size; x++) {
            for (var y = 0; y < this.size; y++) {
                callback(x, y, this.cells[x][y]);
            }
        }
    };

    cellsAvailable = (): boolean => {
        return !!this.availableCells().length;
    };

    cellAvailable = (cell: any) => {
        return !this.cellOccupied(cell);
    };

    cellOccupied = (cell: any): boolean => {
        return !!this.cellContent(cell);
    };

    cellContent = (cell: any): any => {
        if (this.withinBounds(cell)) {
            return this.cells[cell.x][cell.y];
        } else {
            return null;
        }
    };

    // Inserts a tile at its position
    insertTile = (tile: any): void => {
        this.cells[tile.x][tile.y] = tile;
        // console.log(this.toString());
    };

    removeTile = (tile: any): void => {
        this.cells[tile.x][tile.y] = null;
    };

    withinBounds = (position: IPosition): boolean => {
        return position.x >= 0 && position.x < this.size &&
            position.y >= 0 && position.y < this.size;
    };

    toString = (): string => {
        var ret = [];
        for (var y = 0; y < this.size; y++) {
            for (var x = 0; x < this.size; x++) {
                ret.push(this.cells[x][y] ? this.cells[x][y].value : '·');
            }
            ret.push('\n');
        }
        return ret.join('');
    };

    serialize = () => {
        var cellState = [];

        for (var x = 0; x < this.size; x++) {
            var row: any[] = cellState[x] = [];

            for (var y = 0; y < this.size; y++) {
                row.push(this.cells[x][y] ? this.cells[x][y].serialize() : null);
            }
        }

        return {
            size: this.size,
            cells: cellState
        };
    };
}