import { Enemy } from "../Enemy";
import EnemyTypes from "../../enums/EnemyTypes"
import { ZombieEnemy } from "../ZombieEnemy";
import SwordDecorator from "../decorators/SwordDecorator";
import HammerDecorator from "../decorators/HammerDecorator";
export class generateEnemyFactory {

    static getEnemy(type: EnemyTypes): Enemy {
        const randomZombie = new ZombieEnemy("Pepe", 100, 5);
        if(type === EnemyTypes.Zombie){
            return randomZombie;
        }
        if(type === EnemyTypes.ZombieWithHammer){
            return new SwordDecorator(randomZombie);
        }
        if(type === EnemyTypes.ZombieWithSword){
            return  new HammerDecorator(randomZombie);
        }

        throw new Error("Invalid Zombie Type")
    }

}