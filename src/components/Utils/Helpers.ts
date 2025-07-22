type AnyObject = Record<string | number, unknown>

export function updateNestedValue<T extends AnyObject>(
    obj: T,
    path: (string | number)[],
    value: unknown
): T {
    if (path.length === 0) return obj

    const [head, ...rest] = path
    const existing = obj[head] as unknown

    let updated: unknown

    if (rest.length === 0) {
        updated = value
    } else {
        const next =
            typeof existing === 'object' && existing !== null
                ? existing
                : typeof rest[0] === 'number'
                    ? [] // create array if next key is number
                    : {} // otherwise create object

        updated = updateNestedValue(next as AnyObject, rest, value)
    }

    if (Array.isArray(obj)) {
        const arr = [...obj]
        arr[head as number] = updated
        return arr as unknown as T
    } else {
        return {
            ...obj,
            [head]: updated,
        }
    }
}
