"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpreadsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const spread_entity_1 = require("./spread.entity");
const spreads_controller_1 = require("./spreads.controller");
const spreads_service_1 = require("./spreads.service");
let SpreadsModule = class SpreadsModule {
};
SpreadsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([spread_entity_1.Spread])
        ],
        controllers: [spreads_controller_1.SpreadsController],
        providers: [spreads_service_1.SpreadsService]
    })
], SpreadsModule);
exports.SpreadsModule = SpreadsModule;
//# sourceMappingURL=spread.module.js.map