import type z from "zod";
import type { CharSheetSchema, StatTypesUnion, StatSchema } from "./CharSheetImportSchema";

export type CharSheet = z.infer<typeof CharSheetSchema>
export type StatTypes = z.infer<typeof StatTypesUnion>
export type Stat = z.infer<typeof StatSchema>