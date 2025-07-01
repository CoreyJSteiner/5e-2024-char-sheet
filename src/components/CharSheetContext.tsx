import { createContext, useContext } from "react";

export type CharSheet = {
    name?: string,
    background?: string,
    class?: string,
    species?: string,
    subclass?: string,
    level?: number,
    xp?: number,
    ac?: number,
    maxHp?: number,
    tempHp?: number,
    currentHp?: number,
    maxHitDice?: number,
    sidesHitDice?: number,
    currentHitDice?: number,
    deathSaveFail?: number,
    deathSaveSuccess?: number
}

type CharSheetContextType = {
    charSheet: CharSheet,
    updateCharSheet: (updates: Partial<CharSheet>) => void
}

export const CharSheetContext = createContext<CharSheetContextType | undefined>(undefined)

export const useCharSheetContext = () => {
    const charSheet = useContext(CharSheetContext)

    if (charSheet === undefined) {
        throw new Error('CharSheet context consumer is missing a provider')
    }

    return charSheet
}