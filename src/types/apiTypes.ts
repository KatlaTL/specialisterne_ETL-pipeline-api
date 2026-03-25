import z from "zod";
import { Request } from "express";
import { ApiQuerySchema, ApiStationSchema } from "../schemas/apiStationSchema";

export type ApiQueryType = z.infer<typeof ApiQuerySchema>;
export type ApiSensorType = z.infer<typeof ApiStationSchema>;

export type ValidatedRequest<Q, S> = Request & {
  validatedQuery: Q;
  validatedSensor: S;
};