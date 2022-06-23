import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccessCardInformation } from 'src/entity/user_access_card_information.entity';
import { User } from 'src/entity/user_information.entity';
import { UserOtherInformation } from 'src/entity/user_other_information.entity';
import { UserPersonalInformation } from 'src/entity/user_personal_information.entity';
import { UserBlackhole } from 'src/entity/user_status.entity';
import { createQueryBuilder, DataSource, Repository } from 'typeorm';
import { UserTemp } from '../entity/ex.entity';

@Injectable()
export class UserInformationService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>,
        @InjectRepository(UserPersonalInformation)
        private userPersonalRepository:Repository<UserPersonalInformation>,
        @InjectRepository(UserOtherInformation)
        private userOtherRepository:Repository<UserOtherInformation>,
        @InjectRepository(UserAccessCardInformation)
        private userAccessCardRepository:Repository<UserAccessCardInformation>,
        private dataSource:DataSource)
        {}

        getUserTempById():UserTemp{
            const temp = new UserTemp();
            temp.email = "enal";
            temp.id = "####123";
            temp.name = "huchoi";
            return temp;
        }
        
        async getUserByhuchoi(){
            const queryRunner = this.dataSource.createQueryRunner();
            await queryRunner.connect();
            await queryRunner.startTransaction();
            const temp = await queryRunner.manager.createQueryBuilder(User, "user")
            .innerJoinAndSelect("user.userBlackhole", "blackhole", 
            "user.intra_id = :name", {name:"hanchoi"})//오버로딩을 생각하자
            .getMany();
            console.log(temp);
            await queryRunner.release();
            return await this.userRepository.find({});
        }
        async getUserPersonalInformation() {
            return await this.userPersonalRepository.find({});
        }
        async getUserOtherInformation(){
            return await this.userOtherRepository.find({});
        }
        async getUserAccessCardInformation(){
            return await this.userAccessCardRepository.find({});
        }
    }
