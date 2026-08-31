import { Controller, Get, HttpException, HttpStatus, Query } from "@nestjs/common";
import { getClubDetails } from "./clubs-detail.data";
import { getClubList } from "./clubs-list.data";

@Controller()
export class ClubsController {
  @Get("clubs-mock-data")
  findAll(@Query("lang") lang?: string) {
    return getClubList(lang);
  }

  @Get("club-mock-data")
  findOne(
    @Query("slug") slug?: string,
    @Query("nameUrl") nameUrl?: string,
    @Query("lang") lang?: string,
  ) {
    const requestedSlug = slug ?? nameUrl;
    const result = getClubDetails(lang, requestedSlug);

    if (requestedSlug && !result) {
      throw new HttpException(
        { message: `Club with slug "${requestedSlug}" not found` },
        HttpStatus.NOT_FOUND,
      );
    }

    return result;
  }
}
