import EnemyDecorator from "./EnemyDecorator";

export default class ArmourDecorator extends EnemyDecorator {
    takeDamage(DamageReceived: number) {
        return this.enemy.takeDamage(DamageReceived+50); 
    }
}