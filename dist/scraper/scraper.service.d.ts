import { HttpService } from '@nestjs/axios';
import { ScraperResponseDto } from './dto/scraper-response.dto';
import { ShowtimeService } from '../showtime/showtime.service';
import { ScraperRequestDto } from './dto/scraper-request.dto';
export declare class ScraperService {
    private readonly httpService;
    private readonly showtimeService;
    private readonly logger;
    constructor(httpService: HttpService, showtimeService: ShowtimeService);
    private fetchHtml;
    private parseHtml;
    scrape({ url, d }: ScraperRequestDto): Promise<ScraperResponseDto>;
}
