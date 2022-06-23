import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEmploymentAndFound, UserEmploymentStatus, UserHrdNetUtilize, UserInternStatus } from 'src/entity/user_job.entity';
import { UserJobController } from './user_job.controller';
import { UserJobService } from './user_job.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEmploymentAndFound, 
      UserInternStatus, 
      UserHrdNetUtilize,
      UserEmploymentStatus
    ])
  ],
  controllers: [UserJobController],
  providers: [UserJobService]
})
export class UserJobModule {}
