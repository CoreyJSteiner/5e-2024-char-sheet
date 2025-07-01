import { z } from "zod";

export const CharSheetSchema = z.object({
    name: z.string().optional(),
    background: z.string().optional(),
    class: z.string().optional(),
    species: z.string().optional(),
    subclass: z.string().optional(),
    level: z.number().optional(),
    xp: z.number().optional(),
    ac: z.number().optional(),
    maxHp: z.number().optional(),
    tempHp: z.number().optional(),
    currentHp: z.number().optional(),
    maxHitDice: z.number().optional(),
    sidesHitDice: z.number().optional(),
    currentHitDice: z.number().optional(),
    deathSaveFail: z.number().optional(),
    deathSaveSuccess: z.number().optional()
})