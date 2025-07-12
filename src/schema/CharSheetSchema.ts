import { z } from "zod"

export const zFlexibleNumber = () =>
    z.preprocess((val) => {
        if (typeof val === 'string' && val.trim() !== '') {
            const parsed = Number(val)
            return isNaN(parsed) ? val : parsed
        }
        return val
    }, z.number())

export const StatTypesUnion = z.union([
    z.literal("STR"),
    z.literal("DEX"),
    z.literal("CON"),
    z.literal("INT"),
    z.literal("WIS"),
    z.literal("CHA"),
])

export const SkillSchema = z.object({
    modifier: zFlexibleNumber().optional(),
    proficient: z.boolean().optional(),
    expertise: z.boolean().optional(),
})

export const StatSchema = z.object({
    score: zFlexibleNumber().optional(),
    modifier: zFlexibleNumber().optional(),
    save: zFlexibleNumber().optional(),
    skills: z.record(z.string(), SkillSchema).optional()
})

export const DamageLineSchema = z.object({
    name: z.string().optional(),
    atkBonusOrDc: z.string().optional(),
    damageAndType: z.string().optional(),
    notes: z.string().optional()
})

export const SpellLineSchema = z.object({
    spellLevel: zFlexibleNumber().optional(),
    name: z.string().optional(),
    castingTime: z.string().optional(),
    range: z.string().optional(),
    concentrationReq: z.boolean().optional(),
    materialReq: z.boolean().optional(),
    ritualAllow: z.boolean().optional(),
    notes: z.string().optional()
})

export const SpellSlotsSchema = z.object({
    slotLevel: zFlexibleNumber().optional(),
    maxSlots: zFlexibleNumber().optional(),
    spentSlots: zFlexibleNumber().optional(),
})

export const CoinSchema = z.object({
    cp: zFlexibleNumber().optional(),
    sp: zFlexibleNumber().optional(),
    gp: zFlexibleNumber().optional(),
    ep: zFlexibleNumber().optional(),
    pp: zFlexibleNumber().optional(),
})

export const ArmorProfSchema = z.object({
    light: z.boolean().optional(),
    medium: z.boolean().optional(),
    heavy: z.boolean().optional(),
    shields: z.boolean().optional(),
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
    proficiency: zFlexibleNumber().optional(),
    heroicInsp: zFlexibleNumber().optional(),
    initiative: zFlexibleNumber().optional(),
    speed: zFlexibleNumber().optional(),
    size: z.string().optional(),
    passivePerception: zFlexibleNumber().optional(),
    spellAbility: z.string().optional(),
    spellMod: zFlexibleNumber().optional(),
    spellSaveDc: zFlexibleNumber().optional(),
    spellAtkBonus: zFlexibleNumber().optional(),
    stats: z.record(StatTypesUnion, StatSchema).optional(),
    weaponsAndDamage: z.array(DamageLineSchema).optional(),
    spellList: z.array(SpellLineSchema).optional(),
    spellSlots: z.record(zFlexibleNumber(), SpellSlotsSchema).optional(),
    coin: CoinSchema.optional(),
    armorProf: ArmorProfSchema.optional(),
    weaponProf: z.string().optional(),
    toolProf: z.string().optional(),
    appearance: z.string().optional(),
    backstoryPersonality: z.string().optional(),
    languages: z.string().optional(),
    equipment: z.string().optional(),
})