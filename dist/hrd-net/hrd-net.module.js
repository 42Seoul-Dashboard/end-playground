"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrdnetsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hrd_net_entity_1 = require("./hrd-net.entity");
const hrd_net_controller_1 = require("./hrd-net.controller");
const hrd_net_service_1 = require("./hrd-net.service");
let HrdnetsModule = class HrdnetsModule {
};
HrdnetsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([hrd_net_entity_1.Hrdnet])
        ],
        controllers: [hrd_net_controller_1.HrdnetsController],
        providers: [hrd_net_service_1.HrdnetsService]
    })
], HrdnetsModule);
exports.HrdnetsModule = HrdnetsModule;
//# sourceMappingURL=hrd-net.module.js.map