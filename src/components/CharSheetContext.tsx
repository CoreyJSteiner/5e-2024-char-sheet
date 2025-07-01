import { createContext, useContext } from "react"
import { CharSheetSchema } from "../schema/CharSheetImportSchema"
import { z } from "zod"

export type CharSheet = z.infer<typeof CharSheetSchema>;

export type CharSheetContextType = {
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