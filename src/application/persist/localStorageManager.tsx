// import { AsyncStorageStatic } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalStorageManager {
    bestScoreKey: string;
    gameStateKey: string;
    storage;

    constructor() {
        this.bestScoreKey = "bestScore"
        this.gameStateKey = "gameState"
        this.storage = AsyncStorage
    }

    getItem = (options: any) => {
        AsyncStorage.getItem(options.key, (error, result) => {
            if (error) {
                options.error(error);
            } else {
                options.success(result);
            }
        });
    };

    setItem = (options: any) => {
        AsyncStorage.setItem(options.key, options.value, (err) => {
            if (err) {
                options.error(err);
            } else {
                options.success();
            }
        });
    };

    removeItem = (options: any) => {
        AsyncStorage.removeItem(options.key, (err) => {
            if (err) {
                options.error(err);
            } else {
                options.success();
            }
        });
    };

    getBestScore = (callback?: any) => {
        var callback = callback ? callback : () => { };
        this.getItem({
            key: this.bestScoreKey,
            success: (result: any) => {
                callback(result && !isNaN(result) ? parseInt(result) : 0);
            },
            error: (error: any) => {
                console.log(error);
            }
        });
    };

    setBestScore = (score: number, callback?: any) => {
        var callback = callback ? callback : () => { };
        this.setItem({
            key: this.bestScoreKey,
            value: score.toString(),
            success: callback,
            error: (error: any) => {
                console.log(error);
            }
        });
    };

    getGameState = (callback: Function) => {
        return this.getItem({
            key: this.gameStateKey,
            success: (result: any) => {
                var state = result ? JSON.parse(result) : null;
                callback(state);
            },
            error: (error: any) => {
                console.log(error);
            }
        })
    };

    setGameState = (gameState: any, callback?: any) => {
        var callback = callback ? callback : () => { };
        var json = gameState ? JSON.stringify(gameState) : null;
        this.setItem({
            key: this.bestScoreKey,
            value: json,
            success: callback,
            error: (error: any) => {
                console.log(error);
            }
        });
    };

    clearGameState = (callback?: any) => {
        var callback = callback ? callback : () => { };
        this.removeItem({
            key: this.bestScoreKey,
            success: callback,
            error: (error: any) => {
                console.log(error);
            }
        });
    };
}