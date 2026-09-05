import { Module } from "@nestjs/common";
import { AdminModule } from "./admin/admin.module";
import { ClubsModule } from "./clubs/clubs.module";
import { DatabaseModule } from "./database/database.module";
import { EventsModule } from "./events/events.module";
import { HealthController } from "./health.controller";

@Module({
  imports: [DatabaseModule, ClubsModule, EventsModule, AdminModule],
  controllers: [HealthController],
})
export class AppModule {}
