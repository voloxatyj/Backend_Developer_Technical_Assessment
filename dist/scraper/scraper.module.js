"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScraperModule = void 0;
const common_1 = require("@nestjs/common");
const scraper_service_1 = require("./scraper.service");
const scraper_controller_1 = require("./scraper.controller");
const axios_1 = require("@nestjs/axios");
const showtime_service_1 = require("../showtime/showtime.service");
const typeorm_1 = require("@nestjs/typeorm");
const showtime_entity_1 = require("../showtime/entity/showtime.entity");
const showtimeSummary_entity_1 = require("../showtime/entity/showtimeSummary.entity");
let ScraperModule = class ScraperModule {
};
exports.ScraperModule = ScraperModule;
exports.ScraperModule = ScraperModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([showtime_entity_1.ShowtimeEntity, showtimeSummary_entity_1.ShowtimeSummaryEntity]),
        ],
        providers: [scraper_service_1.ScraperService, showtime_service_1.ShowtimeService],
        controllers: [scraper_controller_1.ScraperController],
    })
], ScraperModule);
//# sourceMappingURL=scraper.module.js.map