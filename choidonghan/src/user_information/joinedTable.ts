import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';
import { UserAccessCardInformation } from './entity/user_access_card_information.entity';
import { UserOtherInformation } from './entity/user_other_information.entity';
import { UserPersonalInformation } from './entity/user_personal_information.entity';

@ObjectType('JoinedTable')
export class JoinedTable {
  @Field((type) => Int)
  intra_no: number;

  @Field()
  intra_id: string;

  @Field()
  name: string;

  @Field()
  grade: string;

  @Field()
  start_process: Date;

  @Field()
  academic_state: string;

  @Field()
  coalition: string;

  @Field()
  created_date: Date;

  @Field((type) => [UserOtherInformation])
  userOtherInformation: UserOtherInformation[];

  @Field((type) => UserPersonalInformation)
  userPersonalInformation: UserPersonalInformation; // 일대일 이니까

  @Field((type) => [UserAccessCardInformation])
  userAccessCardInformation: UserAccessCardInformation[];
}
