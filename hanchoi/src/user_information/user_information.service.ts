import { Injectable } from '@nestjs/common';
import { UserTemp } from './entity/user_information.entity';

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
