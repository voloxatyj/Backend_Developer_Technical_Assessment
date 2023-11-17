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
exports.ShowtimeEntity = void 0;
const typeorm_1 = require("typeorm");
let ShowtimeEntity = class ShowtimeEntity {
};
exports.ShowtimeEntity = ShowtimeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ShowtimeEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ShowtimeEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ShowtimeEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ShowtimeEntity.prototype, "showtimeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ShowtimeEntity.prototype, "cinemaName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ShowtimeEntity.prototype, "movieTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz", nullable: false }),
    __metadata("design:type", Date)
], ShowtimeEntity.prototype, "showtimeInUTC", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], ShowtimeEntity.prototype, "bookingLink", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { array: true, nullable: true }),
    __metadata("design:type", Array)
], ShowtimeEntity.prototype, "attributes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, default: null }),
    __metadata("design:type", String)
], ShowtimeEntity.prototype, "city", void 0);
exports.ShowtimeEntity = ShowtimeEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "showtime", orderBy: { id: "ASC" } })
], ShowtimeEntity);
//# sourceMappingURL=showtime.entity.js.map