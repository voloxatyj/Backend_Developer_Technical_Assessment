import { ScraperRequestDto } from './dto/scraper-request.dto';
import { ScraperService } from './scraper.service';
import { ScraperResponseDto } from './dto/scraper-response.dto';
export declare class ScraperController {
    private readonly scraperService;
    constructor(scraperService: ScraperService);
    scrapeRequest({ url, d }: ScraperRequestDto): Promise<ScraperResponseDto>;
}
