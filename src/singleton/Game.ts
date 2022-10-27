export default class Game {
    private static instance: Game;


    private constructor() { }

    public static getInstance(): Game {
        if (!this.instance) {
            this.instance = new Game();
        }

        return this.instance;
    }

    public init(): void {
        console.log("GAME START")
    }

}