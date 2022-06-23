import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBlackhole, UserLapiscineInformation, UserLearningData, UserLeaveOfAbsence, UserProcessProgress, UserReasonOfBreak } from 'src/entity/user_status.entity';
import { UserStatusController } from './user_status.controller';
import { UserStatusService } from './user_status.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserLearningData, 
      UserProcessProgress, 
      UserBlackhole,
      UserLeaveOfAbsence,
      UserReasonOfBreak,
      UserLapiscineInformation
    ])
  ],
  controllers: [UserStatusController],
  providers: [UserStatusService]
})
export class UserStatusModule {}
