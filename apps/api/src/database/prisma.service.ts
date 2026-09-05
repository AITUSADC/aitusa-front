import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy {
  constructor() {
    const connectionString = process.env.DATABASE_URL ??
      (process.env.NODE_ENV !== "production"
        ? "postgresql://aitusa:aitusa@localhost:5432/aitusa?schema=public"
        : undefined);

    if (!connectionString) {
      throw new Error("DATABASE_URL is required in production.");
    }

    super({
      adapter: new PrismaPg({ connectionString }),
    });
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
