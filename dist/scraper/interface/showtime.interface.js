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
exports.ShowtimeInterface = void 0;
const swagger_1 = require("@nestjs/swagger");
class ShowtimeInterface {
}
exports.ShowtimeInterface = ShowtimeInterface;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "0009-170678",
    }),
    __metadata("design:type", String)
], ShowtimeInterface.prototype, "showtimeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Al Hamra Mall - Ras Al Khaimah",
    }),
    __metadata("design:type", String)
], ShowtimeInterface.prototype, "cinemaName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "Taylor Swift: The Eras Tour",
    }),
    __metadata("design:type", String)
], ShowtimeInterface.prototype, "movieTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "2023-11-03T17:30:00Z",
    }),
    __metadata("design:type", String)
], ShowtimeInterface.prototype, "showtimeInUTC", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "https://uae.voxcinemas.com/booking/0009-170678",
    }),
    __metadata("design:type", String)
], ShowtimeInterface.prototype, "bookingLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ["Standard"],
    }),
    __metadata("design:type", Array)
], ShowtimeInterface.prototype, "attributes", void 0);
//# sourceMappingURL=showtime.interface.js.map