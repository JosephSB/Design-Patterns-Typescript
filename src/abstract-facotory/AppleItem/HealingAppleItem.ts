import { IHealingItem } from "../Items";

export default class HealingAppleItem implements IHealingItem {
    getHealingAmount() {
        return 10;
    }
}