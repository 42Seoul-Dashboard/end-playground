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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const app_entity_1 = require("./app.entity");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(sheetRepository, appService) {
        this.sheetRepository = sheetRepository;
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getFile() {
        const fs = require('fs');
        const axios = require('axios');
        let jsonData;
        let Object;
        let OneRow;
        let temp;
        let temp2;
        let temp3;
        let arr;
        let arr_col;
        let rawdata;
        let rawdata2;
        let rawdata3;
        axios({
            method: "get",
            url: "http://spreadsheets.google.com/tq?key=1z3hUKaSTa85yOlORwPsFgmZL99B8vmGsg1nswCyo9aw&pub=1",
        }).then(function (response) {
            rawdata = response.data;
            temp = "/*O_o*/\ngoogle.visualization.Query.setResponse(";
            temp2 = "";
            temp3 = ");";
            rawdata2 = rawdata.replace(temp, temp2);
            rawdata3 = rawdata2.replace(temp3, temp2);
            jsonData = rawdata3;
            const obj = JSON.parse(jsonData);
            const cols = obj.table.cols;
            const rows = obj.table.rows;
            arr_col = [];
            for (let j = 0; j < 9; j++)
                arr_col[j] = cols[j]["label"];
            console.log(arr_col);
            for (let i = 0; i < 4; i++) {
                OneRow = rows[i]["c"];
                arr = [];
                for (let j = 0; j < 100; j++) {
                    if (OneRow[j] != null) {
                        if (OneRow[j]["v"] == null)
                            break;
                        arr[j] = OneRow[j]["v"];
                    }
                    else
                        arr[j] = null;
                }
                let data_sheet = { no: arr[0], Intra_No: arr[1], Intra_Id: arr[2], 성명: arr[3],
                    기수: arr[4], 과정시작: arr[5], 코알리숑: arr[6], 학적: arr[7] };
                let sheet = this.sheetRepository.create(data_sheet);
                this.sheetRepository.save(sheet);
                console.log(arr);
            }
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)("/parse"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getFile", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, typeorm_1.InjectRepository)(app_entity_1.Sheet)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map