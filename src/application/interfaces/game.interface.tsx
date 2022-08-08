import { ITile } from './tile.interface';
export interface IGame {
    tiles: ITile[];
    // won: boolean | undefined;
    // over: boolean | undefined;
    // onKeepGoing: () => void | undefined;
    // onTryAagin: () => void | undefined;
}

export interface IGameProps {
    startTiles: number;
    size: number;
}

export interface IGameState {
    tiles: ITile[];
    score: number;
    over: boolean | undefined;
    won: boolean | undefined;
    keepPlaying: boolean;
    grid: any;
    size: number;
    best?: number | undefined;
}

export interface IAboveGameProps {
    onRestart: () => void;
}

export interface ITraversal {
    x: number[];
    y: number[];
}