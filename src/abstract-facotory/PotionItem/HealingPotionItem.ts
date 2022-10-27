import { IHealingItem } from "../Items";

export default class HealingPotionItem implements IHealingItem {
    getHealingAmount() {
        return 100;
    }
}