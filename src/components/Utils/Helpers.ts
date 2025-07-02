type AnyObject = Record<string | number, unknown>

export function updateNestedValue<T extends AnyObject>(
    obj: T,
    path: (string | number)[],
    value: unknown
): T {
    if (path.length === 0) return obj

    const [head, ...rest] = path

    const existing = obj[head] as unknown

    return {
        ...obj,
        [head]: rest.length === 0
            ? value
            : updateNestedValue(
                (existing && typeof existing === 'object' ? existing : {}) as AnyObject,
                rest,
                value
            )
    } as T
}
