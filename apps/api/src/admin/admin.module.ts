import { Module } from "@nestjs/common";
import { AdminApiKeyGuard } from "./admin-api-key.guard";
import { AdminEventsController } from "./admin-events.controller";
import { AdminEventsService } from "./admin-events.service";

@Module({
  controllers: [AdminEventsController],
  providers: [AdminApiKeyGuard, AdminEventsService],
})
export class AdminModule {}
