import { Query } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { UserTemp } from './entity/user_information.entity';
import { UserInformationService } from './user_information.service';

@Resolver(()=>UserTemp)//graphql에서 controler가 resolver
export class UserInformationResolver {
    constructor(private readonly userService:UserInformationService){}

    @Query(()=>UserTemp)//option
    getUserTempById(@Args("id") id:string){
        return this.userService.getUserTempById();
    }
}
