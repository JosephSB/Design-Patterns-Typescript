import { IPlayer, IWaitingRoom } from "./interfaces/Multiplayer.interfaces";

export default class Multiplayer implements IWaitingRoom {
    private playersInRoom: IPlayer[] = [];

    constructor( private nameRoom: string) {}


    newPlayer(player: IPlayer){
        if(this.playersInRoom.length < 3) {
            this.playersInRoom.push(player);
            this.notify(player.getNamePlayer() + " entro a la sala : "+ this.nameRoom)
        }else player.update(player.getNamePlayer() + " la sala "+ this.nameRoom + " esta llena :(")
    }

    removePlayer(player: IPlayer){
        this.playersInRoom = this.playersInRoom.filter( (item) => item.getIDPlayer() !== player.getIDPlayer() );
        this.notify(player.getNamePlayer() + " salio de la sala : "+ this.nameRoom)
    }

    startGame() {
        this.notify("La sala "+this.nameRoom + " esta lista ")
    }

    private notify(msg: string) {
        this.playersInRoom.map( player => player.update(msg) )
    }

    getNameRoom() {
        return this.nameRoom;
    }


}