import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserComputationFund, UserEducationFundState } from 'src/entity/user_payment.entity';
import { UserPaymentController } from './user_payment.controller';
import { UserPaymentService } from './user_payment.service';
import { UserPaymentResolver } from './user_payment.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserComputationFund, 
      UserEducationFundState,
    ])
  ],
  controllers: [UserPaymentController],
  providers: [UserPaymentService, UserPaymentResolver]
})
export class UserPaymentModule {}
