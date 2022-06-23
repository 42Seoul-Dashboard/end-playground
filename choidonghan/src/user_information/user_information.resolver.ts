import { Query } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { User } from 'src/entity/user_information.entity';
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

}
