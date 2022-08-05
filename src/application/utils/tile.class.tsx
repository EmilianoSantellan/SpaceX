import { IPosition, ITitle } from '../interfaces/index';

export default class Tile {
    x: number;
    y: number;
    value: number;
    previousPosition: IPosition | null;
    mergedFrom: any; // Tracks tiles that merged together

    constructor(position: any, value: any) {
        this.x = position.x;
        this.y = position.y;
        this.value = value || 2;

        this.previousPosition = null;
        this.mergedFrom = null; // Tracks tiles that merged together
    }

    savePosition = (): void => {
        this.previousPosition = { x: this.x, y: this.y };
    }

    updatePosition = (position: IPosition): void => {
        this.x = position.x;
        this.y = position.y;
    }

    serialize = (): ITitle => {
        return {
            position: {
                x: this.x,
                y: this.y
            },
            value: this.value
        };
    }
}