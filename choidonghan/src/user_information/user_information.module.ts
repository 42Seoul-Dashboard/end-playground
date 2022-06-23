import { Module } from '@nestjs/common';
import { UserInformationController } from './user_information.controller';
import { UserInformationService } from './user_information.service';
import { UserInformationResolver } from './user_information.resolver';
import { UserTemp } from '../entity/ex.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user_information.entity';
import { UserPersonalInformation } from 'src/entity/user_personal_information.entity';
import { UserOtherInformation } from 'src/entity/user_other_information.entity';
import { UserAccessCardInformation } from 'src/entity/user_access_card_information.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User, 
      UserPersonalInformation, 
      UserOtherInformation,
      UserAccessCardInformation
    ])
  ],
  controllers: [UserInformationController],
  providers: [UserInformationService, UserInformationResolver, UserTemp],
})
export class UserInformationModule {}
