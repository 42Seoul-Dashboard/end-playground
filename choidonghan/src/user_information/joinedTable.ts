import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  UserEmploymentAndFound,
  UserEmploymentStatus,
  UserHrdNetUtilize,
  UserInternStatus,
} from 'src/user_job/entity/user_job.entity';
import {
  UserComputationFund,
  UserEducationFundState,
} from 'src/user_payment/entity/user_payment.entity';
import {
  UserBlackhole,
  UserLapiscineInformation,
  UserLearningData,
  UserLeaveOfAbsence,
  UserProcessProgress,
  UserReasonOfBreak,
} from 'src/user_status/entity/user_status.entity';
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
  userPersonalInformation: UserPersonalInformation; //일대일 이니까

  @Field((type) => UserAccessCardInformation)
  userAccessCardInformation: UserAccessCardInformation; //일대일 이니까

  @Field((type) => [UserEmploymentAndFound])
  userEmploymentAndFound: UserEmploymentAndFound[];

  @Field((type) => [UserInternStatus])
  userInternStatus: UserInternStatus[];

  @Field((type) => [UserHrdNetUtilize])
  userHrdNetUtilize: UserHrdNetUtilize[];

  @Field((type) => [UserEmploymentStatus])
  userEmploymentStatus: UserEmploymentStatus[];

  @Field((type) => [UserComputationFund])
  userComputationFund: UserComputationFund[];

  @Field((type) => [UserEducationFundState])
  userEducationFundState: UserEducationFundState[];

  @Field((type) => [UserLearningData])
  userLearningData: UserLearningData[];

  @Field((type) => [UserProcessProgress])
  userProcessProgress: UserProcessProgress[];

  @Field((type) => [UserBlackhole])
  userBlackhole: UserBlackhole[];

  @Field((type) => [UserLeaveOfAbsence])
  userLeaveOfAbsence: UserLeaveOfAbsence[];

  @Field((type) => [UserReasonOfBreak])
  userReasonOfBreak: UserReasonOfBreak[];

  @Field((type) => [UserLapiscineInformation])
  userLapiscineInformation: UserLapiscineInformation[];
}
