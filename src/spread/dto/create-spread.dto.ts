import { IsNotEmpty } from "class-validator";

export class CreateSpreadDto { //class는 런타임에서 작동하여 interface보다 파이프같은 기능을 사용할 때 유리
    
    no: number;
    
    Intra_No: string;
    
    Intra_Id: string;
    
    성명: string;
    
    기수: string;
    
    과정시작: string;
    
    코알리숑: string;
    
    학적: string;

}