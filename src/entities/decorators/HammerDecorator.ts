import EnemyDecorator from "./EnemyDecorator";

export default class HammerDecorator extends EnemyDecorator {
    atack() {
        return this.enemy.atack() + 20; 
    }
}