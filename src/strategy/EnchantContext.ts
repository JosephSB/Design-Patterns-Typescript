import { EnchantStrategy } from "./interfaces/EnchantStrategy.interface";

export class EnchantContext {
    private context?: EnchantStrategy;

    public setEnchant(context: EnchantStrategy) {
        this.context = context;
    }

    public execute(time: number) {
        if (!this.context) {
            throw new Error('Enchantment not defined.');
        }

        this.context.execute(time);
    }
}