import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user_information.entity';
import { Repository } from 'typeorm';
import { UserTemp } from '../entity/ex.entity';

@Injectable()
export class UserInformationService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>)
    {}
    getUserTempById():UserTemp{
        const temp = new UserTemp();
        temp.email = "enal";
        temp.id = "####123";
        temp.name = "huchoi";
        return temp;
    }

    async getUserByhuchoi(){
        const ret =  await this.userRepository.find({});
        console.log(ret);
        return ret;
    }
}
