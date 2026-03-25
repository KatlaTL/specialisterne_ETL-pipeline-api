import { DefaultArgs } from "@prisma/client/runtime/client";
import { PrismaClient } from "../generated/client";
import { GlobalOmitConfig } from "../generated/internal/prismaNamespace";

export type PrismaClientType = PrismaClient<never, GlobalOmitConfig | undefined, DefaultArgs>;