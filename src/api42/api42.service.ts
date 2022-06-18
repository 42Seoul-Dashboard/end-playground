import { ForbiddenException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateApi42Dto } from './dto/create-api42.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Api42 } from './api42.entity';
import { Repository } from 'typeorm';
import { app_api, app_id, app_secret, SPREAD_END_POINT } from 'src/config/key';
import axios from 'axios';

@Injectable()
export class Api42sService {
  //  private api42s: Api42[] = []; //private로 다른 컴포넌트에서 사용하는 것을 막아줌 보안목적
                                    //파일시스템으로 임시저장 레포지토리 대신

    constructor(
        @InjectRepository(Api42)//원래는 인자가 되어야하는데 private를 사용하면 암묵적으로 property가 됨
        private api42Repository: Repository<Api42> //레포지토리를 나누는 경우 에러발생해서 서비스에 종속성 심어줌
    ) {}


    //  /* Read */
    
    async getCode():Promise<string>{
        let temp;
        let auth_code;
				temp = await axios ({
					method: "get", // 요청 방식
					url: app_api
				});
				temp = temp.data;
        auth_code = temp.substring(temp.lastIndexOf());
        // console.log("what is code ", auth_code);
        return  auth_code;
		}

		async getToken(code:string) {
        let temp;
        let auth_token;

				temp = await axios ({
					method: "post", // 요청 방식
					url: "https://api.intra.42.fr/oauth/token",
					data: {
							grant_type: "client_credentials",
							client_id: app_id,
							client_secret: app_secret,
							redirect_uri:"localhost:3000",
						}
					});
        temp = temp.data;
        console.log("what is token ",temp.access_token);
        return temp.access_token;
	}

    async sendApi(token){
    let temp;
    let auth_token;
    console.log("인풋인자: token", token)
		temp = await axios ({
			method: "get", // 요청 방식
			url: "https://api.intra.42.fr/v2/users/junghan",
			headers: {
					Authorization: `Bearer ${token}`
			}
		})
		temp = temp.data;
		// console.log("what is api",temp);
		return temp;
	}

   async getApi() {
			let code;
			let token;
			try{
				console.log("순서확인: 1");
				// code = await this.getCode();//getCode에서 받아오는 data는 html
				console.log("순서확인: 2");
				token = await this.getToken(code);
				console.log("순서확인: 3");
				return await this.sendApi(token);
			}catch{
				throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
			}
		}
    /* Create */
    // async createApi42(createApi42Dto: CreateApi42Dto): Promise<Api42> {
    //     //const title = creadApi42Dto.title;
    //     //const description = creadApi42Dto.description;
    //     const { title, description } = createApi42Dto; //DTO적용

    //     const api42 = this.api42Repository.create({
    //         title,
    //         description,
    //         status: Api42Status.PUBLIC
    //     })

    //     await this.api42Repository.save(api42);
    //     return api42;

    async createApi42(createApi42Dto: CreateApi42Dto): Promise<Api42> {

        const {  no, Intra_No, Intra_Id, 성명, 기수, 과정시작, 코알리숑, 학적 } = createApi42Dto; //DTO적용

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
        method: "get", // 요청 방식
        url: `http://api42sheets.google.com/tq?key=${SPREAD_END_POINT}&pub=1`, // 요청 주소
        }).then(function(response) {
            rawdata = response.data;
            console.log(rawdata);
            let temp = "/*O_o*/\ngoogle.visualization.Query.setResponse(";
            let temp2 = "";
            let temp3 = ");";

            rawdata2 = rawdata.replace(temp, temp2);
            rawdata3 = rawdata2.replace(temp3,temp2);
            }).catch(function (err){
            console.log(err); // 에러 처리 내용
            });



        jsonData = rawdata3;


        const obj = JSON.parse(jsonData);
        
        const cols = obj.table.cols;

        const rows = obj.table.rows;
        arr_col = [];
        for (let j = 0; j < 9; j++)
            arr_col[j] = cols[j]["label"];
        console.log(arr_col)
        for (let i = 0; i < 6; i++){
            OneRow = rows[i]["c"];//OneRow는 배열
            arr = [];
            for (let j = 0; j < 100; j++){
                if (OneRow[j] != null){
                    if (OneRow[j]["v"] == null)
                        break;
                    arr[j] = OneRow[j]["v"];
                }
                else
                    arr[j] = null;
            }
        api42 = this.api42Repository.create({ no: arr[0], Intra_No: arr[1], Intra_Id: arr[2], 성명: arr[3], 기수: arr[4], 과정시작: arr[5], 코알리숑: arr[6], 학적: arr[7]});
        //console.log(api42);
        await this.api42Repository.save(api42);
        //console.log(arr);
    }
    return api42;
}

    /* Delete */
    //remove() vs delete()
    //remove는 무조건 존재하는 아이템을 remove 메소드를 이용해서 지워야합니다.
    //delete는 만약 아이템이 존재하면 지우고 존재하지 않으면 아무런 영향이 없습니다.
    //remove는 db에 두번 접근해야해서 비효율적이므로 delete사용
//     async deleteApi42(id: number): Promise<void> {
//         const result = await this.api42Repository.delete(id);

//         if(result.affected === 0) {
//             throw new NotFoundException(`Can't find Api42 with id ${id}`)
//         }
//     }


//     /* Update */
//    async updateApi42Status(id: number, status: Api42Status): Promise<Api42> {
//        const api42 = await this.getApi42ById(id);

//        api42.status = status;
//        await this.api42Repository.save(api42);

//        return api42;
//    }
}