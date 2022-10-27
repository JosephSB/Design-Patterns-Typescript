import { EnchantStrategy } from "./interfaces/EnchantStrategy.interface";

export class FireEnchantStrategy implements EnchantStrategy {

    execute(time: number): void {
        console.log(`Fire will last ${time} seconds`);
    }
}