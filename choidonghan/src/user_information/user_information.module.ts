import { Module } from '@nestjs/common';
import { UserInformationController } from './user_information.controller';
import { UserInformationService } from './user_information.service';
import { UserInformationResolver } from './user_information.resolver';
import { UserTemp } from './entity/user_information.entity';

@Module({
  controllers: [UserInformationController],
  providers: [UserInformationService, UserInformationResolver, UserTemp],
  exports: [UserInformationService]//??
})
export class UserInformationModule {}
