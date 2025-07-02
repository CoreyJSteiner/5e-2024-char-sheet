import type z from "zod";
import type { CharSheetSchema, StatTypesSchema, StatSchema } from "./CharSheetImportSchema";

export type CharSheet = z.infer<typeof CharSheetSchema>
export type StatTypes = z.infer<typeof StatTypesSchema>
export type Stat = z.infer<typeof StatSchema>