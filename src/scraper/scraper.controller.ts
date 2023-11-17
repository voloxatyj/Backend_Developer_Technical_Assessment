import { Controller, Get, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ScraperRequestDto } from './dto/scraper-request.dto';
import { ScraperService } from './scraper.service';
import { ScraperResponseDto } from './dto/scraper-response.dto';

@Controller("scraper")
@ApiTags("scraper")
export class ScraperController {
	constructor(private readonly scraperService: ScraperService) {}

	@ApiOperation({
		summary: "Initiate a new scraping process for the provided URL",
	})
	// TODO: Complete the Swagger response documentation. Ensure the following:
	//  1. Document the 200 OK response, utilizing the ScraperResponseDto. This includes a detailed description and potential example values for the fields.
	@ApiOkResponse({ type: ScraperResponseDto, status: 200 })
	//  2. Outline common error responses, such as 400 Bad Request or 404 Not Found, including what circumstances might trigger these errors.
	@ApiNotFoundResponse({ status: 404, description: "Resource not found" })
  @ApiBadRequestResponse({ status: 400, description: "Bad Request" })
	@Get("scrape")
	scrapeRequest(
		@Query() { url, d }: ScraperRequestDto,
	): Promise<ScraperResponseDto> {
		return this.scraperService.scrape({ url, d });
	}
}
