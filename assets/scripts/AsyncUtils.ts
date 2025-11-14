import { Director, director } from 'cc';

export class AsyncUtils {
    public static delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public static waitForSeconds(seconds: number): Promise<void> {
        return this.delay(seconds * 1000);
    }

    public static waitForNextFrame(): Promise<void> {
        return new Promise(resolve => {
            const cb = () => {
                director.off(Director.EVENT_AFTER_UPDATE, cb);
                resolve();
            };
            director.once(Director.EVENT_AFTER_UPDATE, cb);
        });
    }

    public static async waitForCondition(
        condition: () => boolean,
        checkInterval: number = 50,
        timeout: number = 5000
    ): Promise<boolean> {
        const start = performance.now();
        while (performance.now() - start < timeout) {
            if (condition()) return true;
            await this.delay(checkInterval);
        }
        return false;
    }

    public static async waitForFrames(frameCount: number): Promise<void> {
        for (let i = 0; i < frameCount; i++) {
            await this.waitForNextFrame();
        }
    }

    public static withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const timer = setTimeout(() => reject(new Error('AsyncUtils: Timeout exceeded')), timeoutMs);
            promise.then(
                (result) => {
                    clearTimeout(timer);
                    resolve(result);
                },
                (error) => {
                    clearTimeout(timer);
                    reject(error);
                }
            );
        });
    }
}
