import { IsNotEmpty } from "class-validator";

export class CreateSpreadDto { //class는 런타임에서 작동하여 interface보다 파이프같은 기능을 사용할 때 유리
    
    no: number;
    
    intra_no: string;
    
    intra_id: string;
    
    name: string;
    
    classno: string;
    
    start: string;
    
    co: string;
    
    academy: string;

}