import { BaseEnemy } from "./BaseEnemy"

export class ZombieEnemy extends BaseEnemy{

    constructor (name: string, amountLife: number,amountDamage: number) {
        super(name,amountLife,amountDamage)
    }

    spawn() {
        return `SPAWNED ZOMBIE :  ${this.name} `
    }
}