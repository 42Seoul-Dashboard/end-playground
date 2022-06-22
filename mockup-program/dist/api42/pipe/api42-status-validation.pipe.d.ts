import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { Api42Status } from "../api42-status.enum";
export declare class Api42StatusValidationPipe implements PipeTransform {
    readonly StatusOptions: Api42Status[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
