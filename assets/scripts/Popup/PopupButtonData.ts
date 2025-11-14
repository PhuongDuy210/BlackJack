import { Prefab } from 'cc';

export class PopupButtonData {
    label: string;
    callback?: () => void;
    buttonPrefabOverride?: Prefab | null;

    constructor(
        label: string,
        callback?: () => void,
        buttonPrefabOverride?: Prefab | null
    ) {
        this.label = label;
        this.callback = callback;
        this.buttonPrefabOverride = buttonPrefabOverride ?? null;
    }
}