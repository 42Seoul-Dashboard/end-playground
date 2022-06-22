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
exports.Api42sController = void 0;
const common_1 = require("@nestjs/common");
const api42_service_1 = require("./api42.service");
let Api42sController = class Api42sController {
    constructor(api42sService) {
        this.api42sService = api42sService;
    }
    getCode() {
        return this.api42sService.getApi();
    }
};
__decorate([
    (0, common_1.Get)("/api"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Api42sController.prototype, "getCode", null);
Api42sController = __decorate([
    (0, common_1.Controller)('api42'),
    __metadata("design:paramtypes", [api42_service_1.Api42sService])
], Api42sController);
exports.Api42sController = Api42sController;
//# sourceMappingURL=api42s.controller.js.map