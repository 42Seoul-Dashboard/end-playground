import { CreateApi42Dto } from './dto/create-api42.dto';
import { Api42 } from './api42.entity';
import { Repository } from 'typeorm';
export declare class Api42sService {
    private api42Repository;
    constructor(api42Repository: Repository<Api42>);
    getCode(): Promise<string>;
    getToken(code: string): Promise<string>;
    sendApi(token: string): Promise<string>;
    getApi(): Promise<string>;
    createApi42(createApi42Dto: CreateApi42Dto): Promise<Api42>;
}
