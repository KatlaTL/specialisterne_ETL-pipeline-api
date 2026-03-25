import z from "zod";

export const ApiQueryOrderSchema = z.enum(["asc", "desc"]);

// Helper: convert "" → undefined
const emptyToUndefined = (val: unknown) =>
    val === "" ? undefined : val;

export const ApiQuerySchema = z
    .object({
        limit: z.preprocess(
            emptyToUndefined,
            z.coerce.number().int().positive().optional()
        ),
        from: z.preprocess(
            emptyToUndefined,
            z.coerce.date().optional()
        ),
        to: z.preprocess(
            emptyToUndefined,
            z.coerce.date().optional()
        ),
        order: ApiQueryOrderSchema.default("asc"),
    }).refine((data) => {
        if (data.from && data.to) {
            return data.from <= data.to;
        }
        return true;
    },
        {
            message: "`from` must be before or equal to `to`",
            path: ["from"], // attach error to "from"
        }
    );