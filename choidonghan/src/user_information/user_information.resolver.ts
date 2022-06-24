import { Query } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { UserAccessCardInformation } from 'src/user_information/entity/user_access_card_information.entity';
import { User } from 'src/user_information/entity/user_information.entity';
import { UserOtherInformation } from 'src/user_information/entity/user_other_information.entity';
import { UserPersonalInformation } from 'src/user_information/entity/user_personal_information.entity';
import { QueryResult } from 'typeorm';
import { UserTemp } from '../entity/ex.entity';
import { GetUserOtherInformationArgs } from './argstype/userOtherInformation.argstype';
import { UserInformationService } from './user_information.service';
// interface args {
//     user:{
//         gender:'남'
//     },
//     lapici:{
//         grade:'3'
//     }
// }

@Resolver() //graphql에서 controler가 resolver
export class UserInformationResolver {
  constructor(private readonly userService: UserInformationService) {}

  @Query(() => UserTemp) //option
  getUserTempById(@Args('id') id: string) {
    // return "test";
    return this.userService.getUserTempById();
  }

  // twoJoin(){
  //   temp = await queryRunner.manager
  //     .createQueryBuilder(User, 'user')
  //     .leftJoinAndSelect(
  //       'user.userBlackhole',
  //       'blackhole', //innerJoinAndSelect가 outetJoin인듯?
  //       'blackhole.remaining_period > :period',
  //       { period: 90 },
  //     ) //오버로딩을 생각하자
  //     .getMany();
  // }
  
  // threeJoin(){
  //   while (i < table_Cnt)
  //   {
  //       table = parsing
  //       temp = await queryRunner.manager
  //     .createQueryBuilder(User, 'user')
  //     .leftJoinAndSelect(
  //       'user.userBlackhole',
  //       'blackhole', //innerJoinAndSelect가 outetJoin인듯?
  //       'blackhole.remaining_period > :period',
  //       { period: 90 },
  //     )
  //     } //오버로딩을 생각하자
  //     .leftJoinAndSelect(
  //       'user.userBlackhole',
  //       'blackhole', //innerJoinAndSelect가 outetJoin인듯?
  //       'blackhole.remaining_period > :period',
  //       { period: 90 },
  //     ) //오버로딩을 생각하자
  //     .getMany();
  // }

  @Query(() => [User])
  getUsers() {
    return this.userService.getUserByhuchoi();
  }

  @Query(() => [User])
  getUserById(@Args() args: GetUserOtherInformationArgs) {
    const datee =  args.created_date
    return this.userService.getUserByhuchoi();
  }
  @Query(() => [UserPersonalInformation])
  getUserPersonalInformation() {
    return this.userService.getUserPersonalInformation();
  }

  @Query(() => [UserOtherInformation])
  getUserOtherInformation() {
    return this.userService.getUserOtherInformation();
  }

  @Query(() => [UserAccessCardInformation])
  getUserAccessCardInformation() {
    return this.userService.getUserAccessCardInformation();
  }
}
