import EnemyDecorator from "./EnemyDecorator";

export default class SwordDecorator extends EnemyDecorator {
    atack() {
        return this.enemy.atack() + 10; 
    }
}