import { Controller, Body, Get, Post, Param, Delete, Patch, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { SpreadsService } from './spreads.service';
import { SpreadStatus } from './spread-status.enum';
import { CreateSpreadDto } from './dto/create-spread.dto';
//import { SpreadStatusValidationPipe } from './pipes/spread-status-validation.pipe';
import { Spread } from './spread.entity';

@Controller('spread')
export class SpreadsController {

    constructor(private spreadsService: SpreadsService) {} //종속성 주입 서비스를 사용하기위함 private로 선언하면 controller에서 사용갸능
    
    @Get('/:no')
    getSpreadById(@Param('no') no:any) : Promise<Spread[]> {
        return this.spreadsService.getSpreadByCol(no);
    }

    @Get()
    getAllSpread(): Promise<any> {
        return this.spreadsService.getAllSpread();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createSpread(@Body() createSpread: CreateSpreadDto): Promise<Spread> {
        return this.spreadsService.createSpread(createSpread);
    }

    // @Delete('/:id')
    // deleteSpread(@Param('id', ParseIntPipe) id: number): Promise<void> {
    //     return this.spreadsService.deleteSpread(id);
    // }

    // @Patch('/:id/status')
    // updateSpreadStatus(
    //     @Param('id', ParseIntPipe) id: number,
    //     @Body('status', SpreadStatusValidationPipe) status: SpreadStatus
    // ): Promise<Spread> {
    //     return this.spreadsService.updateSpreadStatus(id, status);
    // }
    
//   constructor(
//     @InjectRepository(Sheet)//원래는 인자가 되어야하는데 private를 사용하면 암묵적으로 property가 됨
//     private sheetRepository: Repository<Sheet> ,//레포지토리를 나누는 경우 에러발생해서 서비스에 종속성 심어줌
//     private readonly appService: AppService
// ) {}

//   @Get("/parse")
//   getFile() {
      
  //   let fs = require('fs');

  //   let data = fs.readFileSync('./src/Spread/test2.json','utf8');

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
