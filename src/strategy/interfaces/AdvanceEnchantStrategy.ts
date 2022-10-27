import { EnchantStrategy } from "./EnchantStrategy.interface";
import { ILevelEnchat } from "./LevelEnchants";

export interface AdvanceEnchantStrategy extends EnchantStrategy{
    nivel: ILevelEnchat;
}