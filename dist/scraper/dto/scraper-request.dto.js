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
exports.ScraperRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ScraperRequestDto {
}
exports.ScraperRequestDto = ScraperRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Website Url",
        required: true,
        example: "https://uae.voxcinemas.com/showtimes",
    }),
    (0, class_validator_1.Matches)("(https://www.|http://www.|https://|http://)?[a-zA-Z0-9]{2,}(.[a-zA-Z0-9]{2,})(.[a-zA-Z0-9]{2,})?"),
    __metadata("design:type", String)
], ScraperRequestDto.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ShowTime Date",
        required: false,
        example: "https://uae.voxcinemas.com/showtimes?c=al-hamra-mall-ras-al-khaimah&d=20231103",
    }),
    __metadata("design:type", String)
], ScraperRequestDto.prototype, "d", void 0);
//# sourceMappingURL=scraper-request.dto.js.map