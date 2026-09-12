import { BadRequestException, Controller, Get, Query } from "@nestjs/common";
import { EventsService } from "./events.service";
import { isEventLocale } from "./events.types";

@Controller("events")
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  findAll(@Query("lang") lang = "en") {
    if (!isEventLocale(lang)) {
      throw new BadRequestException("lang must be one of: en, ru, kk");
    }

    return this.eventsService.findPublished(lang);
  }
}
