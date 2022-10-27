import { IProtectionItem } from "../Items";

export default class ProtectionAppleItem implements IProtectionItem {
    getProtectionAmount() {
        return 10;
    }
}