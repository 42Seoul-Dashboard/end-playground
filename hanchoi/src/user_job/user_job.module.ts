import { Module } from '@nestjs/common';
import { UserJobController } from './user_job.controller';
import { UserJobService } from './user_job.service';

@Module({
  controllers: [UserJobController],
  providers: [UserJobService]
})
export class UserJobModule {}
