import type z from "zod";
import type { CharSheetSchema, StatTypesUnion, StatSchema, SkillSchema } from "./CharSheetSchema";

export type CharSheet = z.infer<typeof CharSheetSchema>
export type StatTypes = z.infer<typeof StatTypesUnion>
export type Stat = z.infer<typeof StatSchema>
export type Skill = z.infer<typeof SkillSchema>