import { IHealingItem, IProtectionItem } from "./Items";

export default interface IItemAbstractFactory {
    createHealingItem (): IHealingItem;
    createProtectionItem(): IProtectionItem;
}