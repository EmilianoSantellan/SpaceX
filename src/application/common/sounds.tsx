import Sound from 'react-native-sound';

export default class SoundGame {
    static reStart(): void {
        try {
            const sound = new Sound(require('../souns/mixkit-player-recharging-in-video-game-2041.wav'), () => {
                sound.play(() => {
                    sound.release();
                });
            })
        } catch (error) {
        }
    }

    static score(): void {
        try {
            const sound = new Sound(require('../souns/mixkit-quick-jump-arcade-game-239.wav'), () => {
                sound.play(() => {
                    sound.release();
                });
            });
        } catch (error) {
        }
    }

    static bestScore(): void {
        try {
            const sound = new Sound(require('../souns/mixkit-space-coin-win-notification-271.wav'), () => {
                sound.play(() => {
                    sound.release();
                });
            });
        } catch (error) {
        }
    }

    static gameWon(): void {
        try {
            const sound = new Sound(require('../souns/mixkit-final-level-bonus-2061.wav'), () => {
                sound.play(() => {
                    sound.release();
                });
            });
        } catch (error) {
        }
    }

    static gameOver(): void {
        try {
            const sound = new Sound(require('../souns/mixkit-arcade-game-opener-222.wav'), () => {
                sound.play(() => {
                    sound.release();
                });
            });
        } catch (error) {
        }
    }
}