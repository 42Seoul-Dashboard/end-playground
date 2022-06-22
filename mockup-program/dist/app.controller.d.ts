import { Repository } from 'typeorm';
import { Sheet } from './app.entity';
import { AppService } from './app.service';
export declare class AppController {
    private sheetRepository;
    private readonly appService;
    constructor(sheetRepository: Repository<Sheet>, appService: AppService);
    getHello(): string;
    getFile(): void;
}
