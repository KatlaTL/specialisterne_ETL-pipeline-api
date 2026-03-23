import { DefaultArgs } from "@prisma/client/runtime/client";
import { PrismaClient, Prisma } from "../generated/client";
import { GlobalOmitConfig } from "../generated/internal/prismaNamespace";

export type PrismaClientType = PrismaClient<never, GlobalOmitConfig | undefined, DefaultArgs>;

export type PrismaDMIType = Prisma.DMIModel;