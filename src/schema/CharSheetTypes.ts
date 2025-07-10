import type z from "zod";
import type { CharSheetSchema, StatTypesUnion, StatSchema, SkillSchema, DamageLineSchema, SpellLineSchema, CoinSchema } from "./CharSheetSchema";

export type CharSheet = z.infer<typeof CharSheetSchema>
export type CharSheetKey = keyof CharSheet
export type StatTypes = z.infer<typeof StatTypesUnion>
export type Stat = z.infer<typeof StatSchema>
export type Skill = z.infer<typeof SkillSchema>
export type DamageLine = z.infer<typeof DamageLineSchema>
export type SpellLine = z.infer<typeof SpellLineSchema>
export type Coin = z.infer<typeof CoinSchema>
export type CoinType = keyof Coin