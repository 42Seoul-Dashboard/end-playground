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
exports.HrdnetsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hrd_net_entity_1 = require("./hrd-net.entity");
const typeorm_2 = require("typeorm");
const key_1 = require("../src/config/key");
let HrdnetsService = class HrdnetsService {
    constructor(hrdnetRepository) {
        this.hrdnetRepository = hrdnetRepository;
    }
    async getHrdnetByCol(no) {
        const found = await this.hrdnetRepository.createQueryBuilder('hrdnet').getMany();
        let temp;
        console.log(found);
        temp = [];
        for (let i = 0; i < 6; i++) {
            switch (no) {
                case "no":
                    temp[i] = found[i].no;
                    break;
                case "Intra_No":
                    temp[i] = found[i].Intra_No;
                    break;
                case "Intra_Id":
                    temp[i] = found[i].Intra_Id;
                    break;
                case "성명":
                    temp[i] = found[i].성명;
                    break;
                case "기수":
                    temp[i] = found[i].기수;
                    break;
                case "과정시작":
                    temp[i] = found[i].과정시작;
                    break;
                case "코알리숑":
                    temp[i] = found[i].코알리숑;
                    break;
                case "학적":
                    temp[i] = found[i].학적;
                    break;
                default:
                    throw new common_1.NotFoundException(`Can't find Hrdnet with ${no}`);
                    break;
            }
        }
        return temp;
    }
    async getAllHrdnet() {
        return await this.hrdnetRepository.find();
    }
    async createHrdnet(createHrdnetDto) {
        const { no, Intra_No, Intra_Id, 성명, 기수, 과정시작, 코알리숑, 학적 } = createHrdnetDto;
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
        let hrdnet;
        await axios({
            method: "get",
            url: `http://hrdnetsheets.google.com/tq?key=${key_1.KEY}&pub=1`,
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
            hrdnet = this.hrdnetRepository.create({ no: arr[0], Intra_No: arr[1], Intra_Id: arr[2], 성명: arr[3], 기수: arr[4], 과정시작: arr[5], 코알리숑: arr[6], 학적: arr[7] });
            await this.hrdnetRepository.save(hrdnet);
        }
        return hrdnet;
    }
};
HrdnetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(hrd_net_entity_1.Hrdnet)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HrdnetsService);
exports.HrdnetsService = HrdnetsService;
//# sourceMappingURL=hrd-net.service.js.map