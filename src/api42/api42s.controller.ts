import { Controller, Body, Get, Post, Param, Delete, Patch, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Api42sService } from './api42.service';
import { Api42Status } from './api42-status.enum';
import { CreateApi42Dto } from './dto/create-api42.dto';
//import { Api42StatusValidationPipe } from './pipes/api42-status-validation.pipe';
import { Api42 } from './api42.entity';
import { url } from 'inspector';

@Controller('api42')
export class Api42sController {

    constructor(private api42sService: Api42sService) {} //종속성 주입 서비스를 사용하기위함 private로 선언하면 controller에서 사용갸능
    
    // @Get('/:no')
    // getApi42ById(@Param('no') no:any) : Promise<Api42[]> {
    //     return this.api42sService.getApi42ByCol(no);
    // }

    @Get("/api")
    getCode(): Promise<string> {
        return this.api42sService.getApi();
    }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createApi42(@Body() createApi42: CreateApi42Dto): Promise<Api42> {
    //     return this.api42sService.createApi42(createApi42);
    // }

    // @Delete('/:id')
    // deleteApi42(@Param('id', ParseIntPipe) id: number): Promise<void> {
    //     return this.api42sService.deleteApi42(id);
    // }

    // @Patch('/:id/status')
    // updateApi42Status(
    //     @Param('id', ParseIntPipe) id: number,
    //     @Body('status', Api42StatusValidationPipe) status: Api42Status
    // ): Promise<Api42> {
    //     return this.api42sService.updateApi42Status(id, status);
    // }
    
//   constructor(
//     @InjectRepository(Sheet)//원래는 인자가 되어야하는데 private를 사용하면 암묵적으로 property가 됨
//     private sheetRepository: Repository<Sheet> ,//레포지토리를 나누는 경우 에러발생해서 서비스에 종속성 심어줌
//     private readonly appService: AppService
// ) {}

//   @Get("/parse")
//   getFile() {
      
  //   let fs = require('fs');

  //   let data = fs.readFileSync('./src/Api42/test2.json','utf8');

  //   console.log(data);

  //   const jsonData = JSON.parse(data);
  //   console.log(jsonData);
  //   const cols= jsonData.cols;
  //   const rows= jsonData.rows;

  //   rows.forEach(todo => {
  //     //let rowc = JSON.parse()
  //     console.log(todo['table']);
  //   })
  //   cols.forEach(todo => {
  //     //console.log(todo['label']);
  // });
 
}
