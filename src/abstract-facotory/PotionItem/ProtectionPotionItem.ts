import { IProtectionItem } from "../Items";

export default class ProtectionPotionItem implements IProtectionItem {
    getProtectionAmount() {
        return 50;
    }
}