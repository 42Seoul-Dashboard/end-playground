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
exports.Spread = void 0;
const typeorm_1 = require("typeorm");
let Spread = class Spread extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Spread.prototype, "no", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'intra_no', nullable: true }),
    __metadata("design:type", String)
], Spread.prototype, "intra_no", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'intra_id', nullable: true }),
    __metadata("design:type", String)
], Spread.prototype, "intra_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name', nullable: true }),
    __metadata("design:type", String)
], Spread.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'classno', nullable: true }),
    __metadata("design:type", String)
], Spread.prototype, "classno", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'start', nullable: true }),
    __metadata("design:type", String)
], Spread.prototype, "start", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'co', nullable: true }),
    __metadata("design:type", String)
], Spread.prototype, "co", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'academy', nullable: true }),
    __metadata("design:type", String)
], Spread.prototype, "academy", void 0);
Spread = __decorate([
    (0, typeorm_1.Entity)()
], Spread);
exports.Spread = Spread;
//# sourceMappingURL=spread.entity.js.map