//import { Time } from "./utils/Time"

import AppleItemFactory from "./abstract-facotory/AppleItem/AppleItem.factory";
import HammerDecorator from "./entities/decorators/HammerDecorator";
import SwordDecorator from "./entities/decorators/SwordDecorator";
import { generateEnemyFactory } from "./entities/factory/generateEnemyFactory";
import { ZombieEnemy } from "./entities/ZombieEnemy";
import EnemyTypes from "./enums/EnemyTypes";
import Multiplayer from "./observer/Multiplayer";
import Player from "./observer/Player";
import Game from "./singleton/Game";
import { EnchantContext } from "./strategy/EnchantContext";
import { ForceEnchantStrategy } from "./strategy/ForceEnchantStrategy";



console.log("LEARNING POO!!")
/*
const ti = Time.getDate();
console.log(ti)*/

/*----------------- RUN GAME -------------------*/
const game = Game.getInstance();
game.init()


/*----------------- SPAWN ENEMYS -------------------*/

const zombie = new ZombieEnemy("Pepe", 100, 5);

console.log(zombie.spawn())
console.log(zombie.takeDamage(120))
console.log(zombie.status())


const zombieWithSword = new SwordDecorator(zombie);
const zombieWithSwordAndHammer = new HammerDecorator(zombieWithSword);
console.log(zombie.atack())
console.log(zombieWithSword.atack())
console.log(zombieWithSwordAndHammer.atack())

const randomZombie = generateEnemyFactory.getEnemy(EnemyTypes.ZombieWithHammer);

console.log(randomZombie.atack())

/*----------------- DROP ITEMS -------------------*/

const apple = new AppleItemFactory()
const healingApple = apple.createHealingItem();

console.log("Apple healing amount:  "+healingApple.getHealingAmount())

/*----------------- ENCHANTMENTS -------------------*/

const _enchantContext = new EnchantContext();
_enchantContext.setEnchant(new ForceEnchantStrategy(2,10));
_enchantContext.execute(10);


/*----------------- MULTIPLAYER -------------------*/
console.log("------------MULTIPLAYER------------")

const wr1 = new Multiplayer("Los Terna");
const wr2 = new Multiplayer("Devs");
const p1 = new Player("Lopez");
const p2 = new Player("Lucho");
const p3 = new Player("JosephSB");
const p4 = new Player("Hardy");

wr1.newPlayer(p1)
wr1.newPlayer(p2)
wr1.newPlayer(p3)
wr1.newPlayer(p4)

console.log("------------------------")
wr2.startGame()
