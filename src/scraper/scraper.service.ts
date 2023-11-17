import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ScraperResponseDto } from './dto/scraper-response.dto';
import * as cheerio from 'cheerio';
import { WebsiteData } from './interface/website-data.interface';
import { ShowtimeService } from '../showtime/showtime.service';
import { ScraperRequestDto } from './dto/scraper-request.dto';
import { ShowtimeInterface } from './interface/showtime.interface';

@Injectable()
export class ScraperService {
	private readonly logger = new Logger(ScraperService.name);

	constructor(
		private readonly httpService: HttpService,
		private readonly showtimeService: ShowtimeService,
	) {}

	private async fetchHtml({ url }: ScraperRequestDto): Promise<string> {
		const { data } = await firstValueFrom(
			this.httpService.get<string>(url).pipe(
				catchError((error: AxiosError) => {
					const msg = error?.response?.data || error?.response || error;
					this.logger.error(msg);
					throw "An error happened!";
				}),
			),
		);
		return data;
	}

	/*
    TODO: Implement showtime scraping functionality. Specific requirements are as follows:
     - Navigate to the VOX Cinemas showtime listing at 'https://uae.voxcinemas.com/showtimes'
     - Choose a random cinema location. For consistency in testing, you might prefer selecting 'Al Hamra Mall - Ras Al Khaimah' or any other location of choice from 'https://voxcinemas.com'.
     - Scrape showtime data for the selected cinema for the date '2023-11-03' or any other date. The expected URL format is 'https://uae.voxcinemas.com/showtimes?c=al-hamra-mall-ras-al-khaimah&d=20231103'.
     - The scraped data should include showtimeId, cinemaName, movieTitle, showtimeInUTC, bookingLink, and attributes. Populate the 'showtimes' array with this data.
     - Ensure that the scraping logic is robust, handling potential inconsistencies in the webpage structure and providing informative error messages if scraping fails.
     - Consider efficiency and performance in your implementation, avoiding unnecessary requests or data processing operations.
     */

	private async parseHtml(html: string, d: string): Promise<WebsiteData> {
		try {
			const $ = cheerio.load(html);
			const title = $("title").text().trim();
			const metaDescription =
				$('meta[name="description"]').attr("content") ?? "";
			const faviconUrl = $('link[rel="shortcut icon"]').attr("href") ?? "";
			const showtimes: ShowtimeInterface[] = [];
			const showtimeInUTC =
				d && d.length > 0
					? d.substring(0, 4) +
					  "-" +
					  d.substring(4, 6) +
					  "-" +
					  d.substring(6, 8)
					: "2023-11-03";

			const scriptUrls: string[] = [];
			$("script").each((_i, el) => {
				const src = $(el).attr("src");
				if (src) {
					scriptUrls.push(src);
				}
			});

			const stylesheetUrls: string[] = [];
			$('link[rel="stylesheet"]').each((_i, el) => {
				const href = $(el).attr("href");
				if (href) {
					stylesheetUrls.push(href);
				}
			});

			const imageUrls: string[] = [];
			$("img").each((_i, el) => {
				const src = $(el).attr("src");
				if (src) {
					imageUrls.push(src);
				}
			});

			const cinemaArticles = $(".showtimes article");
			cinemaArticles.each((_idx, el) => {
				$(el).each((_, el) => {
					const movieTitle = $(el)
						.children("aside")
						.children("div")
						.children("h2")
						.text();
					$(el)
						.children(".dates")
						.children("ol")
						.each((_, el) => {
							$(el)
								.children("li")
								.children("ol")
								.children("li")
								.each((_, el) => {
									const attributes = [
										`${$(el).parent().parent().children("strong").text()}`,
									];
									const cinemaName = $(el)
										.parent()
										.parent()
										.parent()
										.prev()
										.text();
									let showtime: Partial<ShowtimeInterface> = {};
									const showtimeId = $(el).children("a").attr("data-id");
									const bookingLink = `https://uae.voxcinemas.com${$(el)
										.children("a")
										.attr("href")}`;
									showtime = {
										movieTitle,
										cinemaName,
										showtimeId,
										bookingLink,
										showtimeInUTC,
										attributes,
									};
									showtimes.push(showtime as ShowtimeInterface);
								});
						});
				});
			});

			const save_showTimes = showtimes.map((item) => {
				
			});
			await this.showtimeService.addShowtimes(showtimes);

			return {
				title,
				metaDescription,
				faviconUrl,
				scriptUrls,
				stylesheetUrls,
				imageUrls,
				showtimes,
			};
		} catch (error) {
			this.logger.log("[ParseHtml_METHOD]", error);
			throw new HttpException("Erorr when parse html", HttpStatus.BAD_REQUEST);
		}
	}

	async scrape({ url, d }: ScraperRequestDto): Promise<ScraperResponseDto> {
		const html = await this.fetchHtml({ url, d });
		const websiteData: WebsiteData = await this.parseHtml(html, d);
		return {
			requestUrl: url,
			responseData: websiteData,
		};
	}
}
