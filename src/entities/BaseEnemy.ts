import { Enemy } from "./Enemy";

export abstract class BaseEnemy implements Enemy{
    protected name: string;
    protected amountLife: number;
    protected amountDamage: number ;

    constructor (name: string, amountLife: number,amountDamage: number ) {
        this.name = name;
        this.amountLife = amountLife;
        this.amountDamage = amountDamage;
    }

    spawn() {
        return `SPAWNED ENEMY :  ${this.name} `
    }

    status() {
        return `
            -----------------------------------
            STATUS ${this.name} 
            -----------------------------------
            AMOUNT LIFE :  ${this.amountLife} 
            AMOUNT DAMAGE :  ${this.amountDamage} 
            -----------------------------------
        `
    }
    atack() {
        return this.amountDamage;
    }
    takeDamage(DamageReceived: number) {
        if(DamageReceived > this.amountLife ) this.amountLife = 0;
        else this.amountLife = this.amountLife - DamageReceived;
        return `${this.name} took ${DamageReceived} damage`
    }
}