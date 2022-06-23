import { Injectable } from '@nestjs/common';
import { UserTemp } from '../entity/ex.entity';

@Injectable()
export class UserInformationService {
    getUserTempById():UserTemp{
        const temp = new UserTemp();
        temp.email = "enal";
        temp.id = "####123";
        temp.name = "huchoi";
        return temp;
    }
}
