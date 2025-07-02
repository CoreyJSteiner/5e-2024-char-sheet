import { z } from "zod"

export const zFlexibleNumber = () =>
    z.preprocess((val) => {
        if (typeof val === 'string' && val.trim() !== '') {
            const parsed = Number(val)
            return isNaN(parsed) ? val : parsed
        }
        return val
    }, z.number())

export const StatTypesSchema = z.union([
    z.literal("STR"),
    z.literal("DEX"),
    z.literal("CON"),
    z.literal("INT"),
    z.literal("WIS"),
    z.literal("CHA"),
])

export const StatSchema = z.object({
    value: zFlexibleNumber().optional(),
    modifier: zFlexibleNumber().optional(),
})

export const CharSheetSchema = z.object({
    name: z.string().optional(),
    background: z.string().optional(),
    class: z.string().optional(),
    species: z.string().optional(),
    subclass: z.string().optional(),
    level: zFlexibleNumber().optional(),
    xp: zFlexibleNumber().optional(),
    ac: zFlexibleNumber().optional(),
    maxHp: zFlexibleNumber().optional(),
    tempHp: zFlexibleNumber().optional(),
    currentHp: zFlexibleNumber().optional(),
    maxHitDice: zFlexibleNumber().optional(),
    sidesHitDice: zFlexibleNumber().optional(),
    currentHitDice: zFlexibleNumber().optional(),
    deathSaveFail: zFlexibleNumber().optional(),
    deathSaveSuccess: zFlexibleNumber().optional(),
    stats: z.record(StatTypesSchema, StatSchema).optional()
})