import { IPlayer} from "./interfaces/Multiplayer.interfaces";

export default class Player implements IPlayer {
    private namePlayer: string;
    //private room: IWaitingRoom;
    private ID: number;

    constructor(namePlayer: string/*, room: IWaitingRoom*/) {
        this.namePlayer = namePlayer;
        /*this.room = room;*/
        this.ID = Date.now();
    }

    update(msg: string) {
        console.log("Hola "+this.namePlayer+" -> "+msg)
    }

    getNamePlayer(){
        return this.namePlayer;
    }
    getIDPlayer() {
        return this.ID;
    }


}