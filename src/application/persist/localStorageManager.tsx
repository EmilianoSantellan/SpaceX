import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILocalStorage } from '../interfaces/local-storage.interface';

export default class LocalStorageManager {
    private bestScoreKey: string;
    private gameStateKey: string;

    constructor() {
        this.bestScoreKey = 'bestScore';
        this.gameStateKey = 'gameState';
    }

    private getItem(key: string): Promise<string | null> {
        return AsyncStorage.getItem(key);
    };

    private setItem(options: ILocalStorage): Promise<void> {
        return AsyncStorage.setItem(options.key, options.value);
    };

    private removeItem(key: string): Promise<void> {
        return AsyncStorage.removeItem(key);
    };

    async getBestScore(): Promise<number> {
        return await new Promise((resolve, reject) => {
            this.getItem(this.bestScoreKey)
                .then((result) => {
                    resolve(result ? parseInt(result) : 0)
                })
                .catch((err) => {
                    reject(err);
                })
        });
    };

    setBestScore(score: number): Promise<void> {
        return this.setItem({
            key: this.bestScoreKey,
            value: score.toString()
        });
    };

    async getGameState(): Promise<any> {
        return await new Promise((resolve, reject) => {
            this.getItem(this.gameStateKey)
                .then((result) => {
                    resolve(result ? JSON.parse(result) : null)
                })
                .catch((err) => {
                    reject(err);
                })
        });
    };

    setGameState(gameState: any): Promise<void> {
        return this.setItem({
            key: this.gameStateKey,
            value: gameState ? JSON.stringify(gameState) : null
        });
    };

    clearGameState(): Promise<void> {
        return this.removeItem(this.gameStateKey);
    };
}