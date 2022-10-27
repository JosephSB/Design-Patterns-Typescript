export interface IWaitingRoom {
    newPlayer(player: IPlayer): void
    removePlayer(player: IPlayer): void
    //notify(msg: string): void
    startGame(): void
    getNameRoom(): string
}

export interface IPlayer {
    update(msg: string): void
    getNamePlayer(): string
    getIDPlayer(): number
}