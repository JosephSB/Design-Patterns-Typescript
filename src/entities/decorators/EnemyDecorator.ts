import { Enemy } from "../Enemy";

export default abstract class EnemyDecorator implements Enemy {

    protected enemy: Enemy;

    constructor(enemy: Enemy) {
        this.enemy = enemy;
    }

    spawn(){ 
        return this.enemy.spawn()
    }

    status(){ 
        return this.enemy.status()
    }
    
    atack(){ 
        return this.enemy.atack()
    }
    takeDamage(DamageReceived: number){ 
        return this.enemy.takeDamage(DamageReceived)
    }

}