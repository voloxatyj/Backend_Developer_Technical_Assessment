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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowtimeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const showtime_entity_1 = require("./entity/showtime.entity");
const typeorm_2 = require("typeorm");
const showtimeSummary_entity_1 = require("./entity/showtimeSummary.entity");
let ShowtimeService = class ShowtimeService {
    constructor(showtimeEntityRepository, showtimeSummaryEntityRepository, dataSource) {
        this.showtimeEntityRepository = showtimeEntityRepository;
        this.showtimeSummaryEntityRepository = showtimeSummaryEntityRepository;
        this.dataSource = dataSource;
    }
    async updateShowtimeSummary() {
        await this.dataSource.query(`
        INSERT INTO "showtime-summary"
        ("showtimeDate",
         "cinemaName",
         "movieTitle",
         "attributes",
         "city",
         "showtimeCount")
        SELECT "showtimeInUTC",
            "cinemaName",
            "movieTitle",
            "attributes",
            "city",
            count(*)
        FROM "showtime"
        GROUP BY 1, 2, 3, 4, 5
        ON CONFLICT
            (
            "showtimeDate",
            "cinemaName",
            "movieTitle",
            "attributes",
            "city"
            )
            DO UPDATE
                   SET "showtimeCount"= EXCLUDED."showtimeCount"
    `);
    }
    async addShowtimes(showtimes) {
        for (const showtime of showtimes) {
            console.log(showtime);
            await this.dataSource
                .createQueryBuilder()
                .insert()
                .into(showtime_entity_1.ShowtimeEntity)
                .values({
                showtimeId: showtime.showtimeId,
                movieTitle: showtime.movieTitle,
                cinemaName: showtime.cinemaName,
                showtimeInUTC: showtime.showtimeInUTC,
                bookingLink: showtime.bookingLink,
                attributes: showtime.attributes,
            })
                .orIgnore()
                .execute()
                .catch((error) => console.log(error));
        }
        await this.updateShowtimeSummary();
    }
};
exports.ShowtimeService = ShowtimeService;
exports.ShowtimeService = ShowtimeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(showtime_entity_1.ShowtimeEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(showtimeSummary_entity_1.ShowtimeSummaryEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], ShowtimeService);
//# sourceMappingURL=showtime.service.js.map