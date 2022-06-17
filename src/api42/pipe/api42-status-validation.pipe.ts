import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { Api42Status } from "../api42-status.enum";


export class Api42StatusValidationPipe implements PipeTransform {

    readonly StatusOptions = [
        Api42Status.PRIVATE,
        Api42Status.PUBLIC
    ]
    transform(value: any, metadata: ArgumentMetadata) {
       // console.log('value', value);// value adsfas 처리가 된 인자의 값
       // console.log('metadata', metadata); // metadata { metatype: [Function: String], type: 'body', data: 'status' } 인자에 대한 메타 데이터
        value = value.toUpperCase();

        if(!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} isn't in the status options`)
        }
        return value;
    }

    private isStatusValid(status: any) {
        const index = this.StatusOptions.indexOf(status);
        return index !== -1;
    }
}