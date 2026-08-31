import { Module } from "@nestjs/common";
import { ClubsModule } from "./clubs/clubs.module";
import { HealthController } from "./health.controller";

@Module({
  imports: [ClubsModule],
  controllers: [HealthController],
})
export class AppModule {}
