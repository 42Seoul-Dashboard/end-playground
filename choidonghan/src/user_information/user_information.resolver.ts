import { Query } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { UserAccessCardInformation } from 'src/entity/user_access_card_information.entity';
import { User } from 'src/entity/user_information.entity';
import { UserOtherInformation } from 'src/entity/user_other_information.entity';
import { UserPersonalInformation } from 'src/entity/user_personal_information.entity';
import { QueryResult } from 'typeorm';
import { UserTemp } from '../entity/ex.entity';
import { UserInformationService } from './user_information.service';

@Resolver()//graphql에서 controler가 resolver
export class UserInformationResolver {
    constructor(private readonly userService:UserInformationService){}

    @Query(()=>UserTemp)//option
    getUserTempById(@Args("id") id:string){
        // return "test";
        return this.userService.getUserTempById();
    }

    @Query(()=>[User] )
    getUser(){
        return this.userService.getUserByhuchoi();
    }

    @Query(()=>[UserPersonalInformation])
    getUserPersonalInformation(){
        return this.userService.getUserPersonalInformation();
    }

    @Query(()=>[UserOtherInformation])
    getUserOtherInformation(){
        return this.userService.getUserOtherInformation();
    }

    @Query(()=>[UserAccessCardInformation])
    getUserAccessCardInformation(){
        return this.userService.getUserAccessCardInformation();
    }
}
