import IItemAbstractFactory from "../ItemAbstractFactory";
import { IHealingItem, IProtectionItem } from "../Items";
import HealingAppleItem from "./HealingAppleItem";
import ProtectionAppleItem from "./ProtectionAppleItem";

export default class AppleItemFactory implements IItemAbstractFactory {
    createHealingItem(): IHealingItem {
        return new HealingAppleItem();
    }

    createProtectionItem(): IProtectionItem {
        return new ProtectionAppleItem();
    }
}