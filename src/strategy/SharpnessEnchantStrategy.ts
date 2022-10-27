import { AdvanceEnchantStrategy } from "./interfaces/AdvanceEnchantStrategy";
import { ILevelEnchat } from "./interfaces/LevelEnchants";

export class SharpnessEnchantStrategy implements AdvanceEnchantStrategy {

    constructor(public nivel: ILevelEnchat) {}

    execute(time: number): void {
        console.log(`Sharpness ${this.nivel} will last ${time} seconds`);
    }
}