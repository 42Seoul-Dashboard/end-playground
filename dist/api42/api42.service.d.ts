import { CreateApi42Dto } from './dto/create-api42.dto';
import { Api42 } from './api42.entity';
import { Repository } from 'typeorm';
export declare class Api42sService {
    private api42Repository;
    constructor(api42Repository: Repository<Api42>);
    getApi42ByCol(no: any): Promise<any>;
    getAllApi42(): Promise<Api42[]>;
    createApi42(createApi42Dto: CreateApi42Dto): Promise<Api42>;
}
