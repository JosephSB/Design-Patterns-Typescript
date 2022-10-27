import { AdvanceEnchantStrategy } from "./interfaces/AdvanceEnchantStrategy";
import { ILevelEnchat } from "./interfaces/LevelEnchants";

interface IFireEnchant extends AdvanceEnchantStrategy{
    collateralDamage: number
}

export class ForceEnchantStrategy implements IFireEnchant {

    constructor(public nivel: ILevelEnchat, public collateralDamage: number) {}

    execute(time: number): void {
        console.log(`Force ${this.nivel} will last ${time} seconds and has ${this.collateralDamage} of Collateral damage`);
    }
}