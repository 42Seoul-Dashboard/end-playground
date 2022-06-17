import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class Api42StatusValidationPipe implements PipeTransform {
    readonly StatusOptions: any[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
