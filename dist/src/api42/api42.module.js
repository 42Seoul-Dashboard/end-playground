"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api42sModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const api42_entity_1 = require("./api42.entity");
const api42s_controller_1 = require("./api42s.controller");
const api42_service_1 = require("./api42.service");
let Api42sModule = class Api42sModule {
};
Api42sModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([api42_entity_1.Api42])
        ],
        controllers: [api42s_controller_1.Api42sController],
        providers: [api42_service_1.Api42sService]
    })
], Api42sModule);
exports.Api42sModule = Api42sModule;
//# sourceMappingURL=api42.module.js.map