export interface IGame {
    tiles: any[];
    won: boolean | undefined;
    over: boolean | undefined;
    onKeepGoing: () => void | undefined;
    onTryAagin: () => void | undefined;
}

export interface IGameProps {
    startTiles: number;
    size: number;
}

export interface IGameState {
    tiles: any[];
    score: number;
    over: boolean | undefined;
    win: boolean | undefined;
    keepPlaying: boolean;
    grid: any;
    size: number;
    best?: number | undefined;
    won?: boolean | undefined;
}

export interface IAboveGameProps {
    onRestart: () => void | undefined;
}

export interface ITraversal {
    x: number[];
    y: number[];
}