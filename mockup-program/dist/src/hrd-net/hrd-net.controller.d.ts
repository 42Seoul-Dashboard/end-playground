import { HrdnetsService } from './hrd-net.service';
import { CreateHrdnetDto } from './dto/create-hrd-net.dto';
import { Hrdnet } from './hrd-net.entity';
export declare class HrdnetsController {
    private hrdnetsService;
    constructor(hrdnetsService: HrdnetsService);
    getHrdnetById(no: any): Promise<Hrdnet[]>;
    getAllHrdnet(): Promise<any>;
    createHrdnet(createHrdnet: CreateHrdnetDto): Promise<Hrdnet>;
}
