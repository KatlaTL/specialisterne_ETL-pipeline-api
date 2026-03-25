import z from "zod";
import { Request } from "express";
import { ApiQuerySchema } from "../schemas/apiQuerySchema";

export type ApiQueryType = z.infer<typeof ApiQuerySchema>;

export type ValidatedRequest<T> = Request & {
  validatedQuery: T;
};