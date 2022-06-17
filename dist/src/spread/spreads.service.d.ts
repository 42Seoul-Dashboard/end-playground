import { CreateSpreadDto } from './dto/create-spread.dto';
import { Spread } from './spread.entity';
import { Repository } from 'typeorm';
export declare class SpreadsService {
    private spreadRepository;
    constructor(spreadRepository: Repository<Spread>);
    getSpreadByCol(no: any): Promise<any>;
    getAllSpread(): Promise<Spread[]>;
    createSpread(createSpreadDto: CreateSpreadDto): Promise<Spread>;
}
