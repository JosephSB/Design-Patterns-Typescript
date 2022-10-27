import IItemAbstractFactory from "../ItemAbstractFactory";
import { IHealingItem, IProtectionItem } from "../Items";
import HealingPotionItem from "./HealingPotionItem";
import ProtectionPotionItem from "./ProtectionPotionItem";

export default class PotionItemFactory implements IItemAbstractFactory {
    createHealingItem(): IHealingItem {
        return new HealingPotionItem();
    }

    createProtectionItem(): IProtectionItem {
        return new ProtectionPotionItem();
    }
}