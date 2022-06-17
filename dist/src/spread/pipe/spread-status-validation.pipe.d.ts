import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { SpreadStatus } from "../spread-status.enum";
export declare class SpreadStatusValidationPipe implements PipeTransform {
    readonly StatusOptions: SpreadStatus[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
