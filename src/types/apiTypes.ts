import z from "zod";
import { Request } from "express";
import { ApiQuerySchema, ApiSensorSchema } from "../schemas/apiQuerySchema";

export type ApiQueryType = z.infer<typeof ApiQuerySchema>;
export type ApiSensorType = z.infer<typeof ApiSensorSchema>;

export type ValidatedRequest<Q, S> = Request & {
  validatedQuery: Q;
  validatedSensor: S;
};