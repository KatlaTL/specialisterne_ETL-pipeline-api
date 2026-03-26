
export const reduceRequestedFields = (requestedFields: string[]): Record<string, boolean> => {
    return requestedFields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
    }, {} as Record<string, boolean>)
}