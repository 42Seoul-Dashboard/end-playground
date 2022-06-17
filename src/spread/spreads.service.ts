import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpreadDto } from './dto/create-spread.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Spread } from './spread.entity';
import { Repository } from 'typeorm';
import { KEY } from 'src/config/key';

@Injectable()
export class SpreadsService {
  //  private spreads: Spread[] = []; //private로 다른 컴포넌트에서 사용하는 것을 막아줌 보안목적
                                    //파일시스템으로 임시저장 레포지토리 대신

    constructor(
        @InjectRepository(Spread)//원래는 인자가 되어야하는데 private를 사용하면 암묵적으로 property가 됨
        private spreadRepository: Repository<Spread> //레포지토리를 나누는 경우 에러발생해서 서비스에 종속성 심어줌
    ) {}

    //  /* Read */
    async getSpreadByCol(no: any): Promise <any> { //디비에서 데이터 꺼내올때 오래걸리기 때문에 비동기처리
        const found = await this.spreadRepository.createQueryBuilder('spread').getMany(); //버전바뀜
        let temp;

        console.log(found);
        temp = [];
        for (let i = 0; i < 6 ; i++)
        {
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
                    throw new NotFoundException(`Can't find Spread with ${no}`)
                    break;
            }
        }
        return temp;
    }
    
    async getAllSpread(): Promise <Spread[]> {
        return await this.spreadRepository.find();
    }

    /* Create */
    // async createSpread(createSpreadDto: CreateSpreadDto): Promise<Spread> {
    //     //const title = creadSpreadDto.title;
    //     //const description = creadSpreadDto.description;
    //     const { title, description } = createSpreadDto; //DTO적용

    //     const spread = this.spreadRepository.create({
    //         title,
    //         description,
    //         status: SpreadStatus.PUBLIC
    //     })

    //     await this.spreadRepository.save(spread);
    //     return spread;

    async createSpread(createSpreadDto: CreateSpreadDto): Promise<Spread> {

        const {  no, Intra_No, Intra_Id, 성명, 기수, 과정시작, 코알리숑, 학적 } = createSpreadDto; //DTO적용

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
        method: "get", // 요청 방식
        url: `http://spreadsheets.google.com/tq?key=${KEY}&pub=1`, // 요청 주소
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
        spread = this.spreadRepository.create({ no: arr[0], Intra_No: arr[1], Intra_Id: arr[2], 성명: arr[3], 기수: arr[4], 과정시작: arr[5], 코알리숑: arr[6], 학적: arr[7]});
        //console.log(spread);
        await this.spreadRepository.save(spread);
        //console.log(arr);
    }
    return spread;
}

    /* Delete */
    //remove() vs delete()
    //remove는 무조건 존재하는 아이템을 remove 메소드를 이용해서 지워야합니다.
    //delete는 만약 아이템이 존재하면 지우고 존재하지 않으면 아무런 영향이 없습니다.
    //remove는 db에 두번 접근해야해서 비효율적이므로 delete사용
//     async deleteSpread(id: number): Promise<void> {
//         const result = await this.spreadRepository.delete(id);

//         if(result.affected === 0) {
//             throw new NotFoundException(`Can't find Spread with id ${id}`)
//         }
//     }


//     /* Update */
//    async updateSpreadStatus(id: number, status: SpreadStatus): Promise<Spread> {
//        const spread = await this.getSpreadById(id);

//        spread.status = status;
//        await this.spreadRepository.save(spread);

//        return spread;
//    }
}