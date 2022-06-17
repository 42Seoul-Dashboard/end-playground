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
exports.HrdnetsController = void 0;
const common_1 = require("@nestjs/common");
const hrd_net_service_1 = require("./hrd-net.service");
const create_hrd_net_dto_1 = require("./dto/create-hrd-net.dto");
let HrdnetsController = class HrdnetsController {
    constructor(hrdnetsService) {
        this.hrdnetsService = hrdnetsService;
    }
    getHrdnetById(no) {
        return this.hrdnetsService.getHrdnetByCol(no);
    }
    getAllHrdnet() {
        return this.hrdnetsService.getAllHrdnet();
    }
    createHrdnet(createHrdnet) {
        return this.hrdnetsService.createHrdnet(createHrdnet);
    }
};
__decorate([
    (0, common_1.Get)('/:no'),
    __param(0, (0, common_1.Param)('no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HrdnetsController.prototype, "getHrdnetById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HrdnetsController.prototype, "getAllHrdnet", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hrd_net_dto_1.CreateHrdnetDto]),
    __metadata("design:returntype", Promise)
], HrdnetsController.prototype, "createHrdnet", null);
HrdnetsController = __decorate([
    (0, common_1.Controller)('hrdnet'),
    __metadata("design:paramtypes", [hrd_net_service_1.HrdnetsService])
], HrdnetsController);
exports.HrdnetsController = HrdnetsController;
//# sourceMappingURL=hrd-net.controller.js.map