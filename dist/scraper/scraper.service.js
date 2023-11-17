"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ScraperService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScraperService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const cheerio = require("cheerio");
const showtime_service_1 = require("../showtime/showtime.service");
let ScraperService = ScraperService_1 = class ScraperService {
    constructor(httpService, showtimeService) {
        this.httpService = httpService;
        this.showtimeService = showtimeService;
        this.logger = new common_1.Logger(ScraperService_1.name);
    }
    async fetchHtml({ url }) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url).pipe((0, rxjs_1.catchError)((error) => {
            const msg = error?.response?.data || error?.response || error;
            this.logger.error(msg);
            throw "An error happened!";
        })));
        return data;
    }
    async parseHtml(html, d) {
        try {
            const $ = cheerio.load(html);
            const title = $("title").text().trim();
            const metaDescription = $('meta[name="description"]').attr("content") ?? "";
            const faviconUrl = $('link[rel="shortcut icon"]').attr("href") ?? "";
            const showtimes = [];
            const showtimeInUTC = d && d.length > 0
                ? d.substring(0, 4) +
                    "-" +
                    d.substring(4, 6) +
                    "-" +
                    d.substring(6, 8)
                : "2023-11-03";
            const scriptUrls = [];
            $("script").each((_i, el) => {
                const src = $(el).attr("src");
                if (src) {
                    scriptUrls.push(src);
                }
            });
            const stylesheetUrls = [];
            $('link[rel="stylesheet"]').each((_i, el) => {
                const href = $(el).attr("href");
                if (href) {
                    stylesheetUrls.push(href);
                }
            });
            const imageUrls = [];
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
                            let showtime = {};
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
                            showtimes.push(showtime);
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
        }
        catch (error) {
            this.logger.log("[ParseHtml_METHOD]", error);
            throw new common_1.HttpException("Erorr when parse html", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async scrape({ url, d }) {
        const html = await this.fetchHtml({ url, d });
        const websiteData = await this.parseHtml(html, d);
        return {
            requestUrl: url,
            responseData: websiteData,
        };
    }
};
exports.ScraperService = ScraperService;
exports.ScraperService = ScraperService = ScraperService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        showtime_service_1.ShowtimeService])
], ScraperService);
//# sourceMappingURL=scraper.service.js.map