import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AdminApiKeyGuard } from "./admin-api-key.guard";
import { AdminEventsService } from "./admin-events.service";
import { parseCreateEventInput } from "./admin-events.types";

@Controller("admin/events")
@UseGuards(AdminApiKeyGuard)
export class AdminEventsController {
  constructor(private readonly adminEventsService: AdminEventsService) {}

  @Post()
  create(@Body() body: unknown) {
    return this.adminEventsService.create(parseCreateEventInput(body));
  }
}
