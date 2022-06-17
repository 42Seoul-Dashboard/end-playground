import { Api42sService } from './api42.service';
import { CreateApi42Dto } from './dto/create-api42.dto';
import { Api42 } from './api42.entity';
export declare class Api42sController {
    private api42sService;
    constructor(api42sService: Api42sService);
    getApi42ById(no: any): Promise<Api42[]>;
    getAllApi42(): Promise<any>;
    createApi42(createApi42: CreateApi42Dto): Promise<Api42>;
}
