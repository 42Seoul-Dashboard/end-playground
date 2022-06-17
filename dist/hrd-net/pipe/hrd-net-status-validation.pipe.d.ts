import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
export declare class HrdnetStatusValidationPipe implements PipeTransform {
    readonly StatusOptions: any[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
