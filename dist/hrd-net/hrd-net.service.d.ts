import { CreateHrdnetDto } from './dto/create-hrd-net.dto';
import { Hrdnet } from './hrd-net.entity';
import { Repository } from 'typeorm';
export declare class HrdnetsService {
    private hrdnetRepository;
    constructor(hrdnetRepository: Repository<Hrdnet>);
    getHrdnetByCol(no: any): Promise<any>;
    getAllHrdnet(): Promise<Hrdnet[]>;
    createHrdnet(createHrdnetDto: CreateHrdnetDto): Promise<Hrdnet>;
}
