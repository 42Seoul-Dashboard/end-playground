import { Api42sService } from './api42.service';
export declare class Api42sController {
    private api42sService;
    constructor(api42sService: Api42sService);
    getCode(): Promise<string>;
}
