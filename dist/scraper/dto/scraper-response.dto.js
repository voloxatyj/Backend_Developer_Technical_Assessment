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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScraperResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const website_data_interface_1 = require("../interface/website-data.interface");
class ScraperResponseDto {
}
exports.ScraperResponseDto = ScraperResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Website Url",
        example: "https://www.cinemaplus.az/az/cinema/about-cinemaplus/28-mall/",
    }),
    __metadata("design:type", String)
], ScraperResponseDto.prototype, "requestUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Response Data",
        example: website_data_interface_1.WebsiteData,
    }),
    __metadata("design:type", website_data_interface_1.WebsiteData)
], ScraperResponseDto.prototype, "responseData", void 0);
//# sourceMappingURL=scraper-response.dto.js.map