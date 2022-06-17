import { SpreadsService } from './spreads.service';
import { CreateSpreadDto } from './dto/create-spread.dto';
import { Spread } from './spread.entity';
export declare class SpreadsController {
    private spreadsService;
    constructor(spreadsService: SpreadsService);
    getSpreadById(no: any): Promise<Spread[]>;
    getAllSpread(): Promise<any>;
    createSpread(createSpread: CreateSpreadDto): Promise<Spread>;
}
