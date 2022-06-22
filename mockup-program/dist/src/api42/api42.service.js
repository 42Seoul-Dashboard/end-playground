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
exports.Api42sService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const api42_entity_1 = require("./api42.entity");
const typeorm_2 = require("typeorm");
const key_1 = require("../config/key");
const axios_1 = require("axios");
let Api42sService = class Api42sService {
    constructor(api42Repository) {
        this.api42Repository = api42Repository;
    }
    async getCode() {
        let temp;
        let auth_code;
        await (0, axios_1.default)({
            method: "get",
            url: key_1.app_api
        }).then(function (response) {
            temp = response.data;
            auth_code = temp.substring(temp.lastIndexOf());
            console.log("what is code ", auth_code);
        }).catch(function (err) {
        });
        return await auth_code;
    }
    async getToken(code) {
        let temp;
        let auth_token;
        await (0, axios_1.default)({
            method: "post",
            url: "https://api.intra.42.fr/oauth/token",
            data: {
                grant_type: "client_credentials",
                client_id: key_1.app_id,
                client_secret: key_1.app_secret
            }
        }).then(function (response) {
            temp = response.data;
            console.log("what is token ", temp.access_token);
        }).catch(function (err) {
        });
        return await temp.access_token;
    }
    async sendApi(token) {
        let temp;
        let auth_token;
        await (0, axios_1.default)({
            method: "get",
            url: "https://api.intra.42.fr/v2/users/junghan",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {
            temp = response.data;
            console.log("what is api", temp);
        }).catch(function (err) {
        });
        return await temp;
    }
    async getApi() {
        let code;
        let token;
        code = this.getCode();
        token = this.getToken(code);
        return await this.sendApi(token);
    }
    async createApi42(createApi42Dto) {
        const { no, Intra_No, Intra_Id, 성명, 기수, 과정시작, 코알리숑, 학적 } = createApi42Dto;
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
        let api42;
        await axios({
            method: "get",
            url: `http://api42sheets.google.com/tq?key=${key_1.SPREAD_END_POINT}&pub=1`,
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
            api42 = this.api42Repository.create({ no: arr[0], Intra_No: arr[1], Intra_Id: arr[2], 성명: arr[3], 기수: arr[4], 과정시작: arr[5], 코알리숑: arr[6], 학적: arr[7] });
            await this.api42Repository.save(api42);
        }
        return api42;
    }
};
Api42sService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(api42_entity_1.Api42)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], Api42sService);
exports.Api42sService = Api42sService;
//# sourceMappingURL=api42.service.js.map