import { Query } from '@nestjs/graphql';
import { Args, Resolver } from '@nestjs/graphql';
import { UserAccessCardInformation } from 'src/user_information/entity/user_access_card_information.entity';
import { User } from 'src/user_information/entity/user_information.entity';
import { UserOtherInformation } from 'src/user_information/entity/user_other_information.entity';
import { UserPersonalInformation } from 'src/user_information/entity/user_personal_information.entity';
import { QueryResult } from 'typeorm';
import { FilterArgs } from './argstype/filter.argstype';
import { GetUserOtherInformationArgs } from './argstype/userOtherInformation.argstype';
import { Filter } from './filter';
import { JoinedTable } from './joinedTable';
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
    return this.userService.querySampel();
  }

  @Query(() => [User])
  getUserById(@Args() args: GetUserOtherInformationArgs) {
    return this.userService.querySampel();
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

  @Query(() => [JoinedTable])
  getFilter(@Args() filterArg: FilterArgs) {
    // console.log(filterArg.filters);
    // const temp = filterArg.filters['realFilters'];
    // for (const i in temp) {
    //   console.log('key', i);
    //   console.log('value', temp[i]);
    // }
    // console.log('--------------------');
    // const arr = [];
    // arr.push(1);
    // arr.push(2);
    // arr.push(3);
    // arr.push(4);
    // for (const i in arr) {
    //   console.log('key', i);
    //   console.log('value', arr[i]);
    // }
    // const ret = new JoinedTable();
    // ret.grade = '3기';
    // ret.name = 'huchoi';
    // return ret;
    return this.userService.processFilters(filterArg.filters["realFilters"]);
  }
}
