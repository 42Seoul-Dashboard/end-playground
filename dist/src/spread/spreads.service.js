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
exports.SpreadsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const spread_entity_1 = require("./spread.entity");
const typeorm_2 = require("typeorm");
const key_1 = require("../config/key");
let SpreadsService = class SpreadsService {
    constructor(spreadRepository) {
        this.spreadRepository = spreadRepository;
    }
    async getSpreadByCol(no) {
        const found = await this.spreadRepository.find({
            select: {
                [no]: true
            }
        });
        console.log(found);
        return found;
    }
    async getAllSpread() {
        return await this.spreadRepository.find();
    }
    async createSpread(createSpreadDto) {
        const { no, intra_no, intra_id, name, classno, start, co, academy } = createSpreadDto;
        const fs = require('fs');
        const axios = require('axios');
        let jsonData;
        let Object;
        let OneRow;
        let arr;
        let arr_col;
        let rawdata;
        let rawdata2;
        let rawdata3;
        let spread;
        await axios({
            method: "get",
            url: `http://spreadsheets.google.com/tq?key=${key_1.SPREAD_END_POINT}&pub=1`,
        }).then(function (response) {
            rawdata = response.data;
            console.log(rawdata);
            let temp = "/*O_o*/\ngoogle.visualization.Query.setResponse(";
            let temp2 = "";
            let temp3 = ");";
            rawdata2 = rawdata.replace(temp, temp2);
            rawdata3 = rawdata2.replace(temp3, temp2);
        }).catch(function (err) {
            console.log(err);
        });
        jsonData = rawdata3;
        const obj = JSON.parse(jsonData);
        const cols = obj.table.cols;
        const rows = obj.table.rows;
        arr_col = [];
        for (let j = 0; j < 9; j++)
            arr_col[j] = cols[j]["label"];
        console.log(arr_col);
        for (let i = 0; i < 6; i++) {
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
            spread = this.spreadRepository.create({ no: arr[0], intra_no: arr[1], intra_id: arr[2], name: arr[3], classno: arr[4], start: arr[5], co: arr[6], academy: arr[7] });
            await this.spreadRepository.save(spread);
        }
        return spread;
    }
};
SpreadsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(spread_entity_1.Spread)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SpreadsService);
exports.SpreadsService = SpreadsService;
//# sourceMappingURL=spreads.service.js.map