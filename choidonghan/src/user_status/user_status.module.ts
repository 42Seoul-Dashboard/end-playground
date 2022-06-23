import { Module } from '@nestjs/common';
import { UserStatusController } from './user_status.controller';
import { UserStatusService } from './user_status.service';

@Module({
  controllers: [UserStatusController],
  providers: [UserStatusService]
})
export class UserStatusModule {}
