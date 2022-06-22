import { Module } from '@nestjs/common';
import { UserPaymentController } from './user_payment.controller';
import { UserPaymentService } from './user_payment.service';

@Module({
  controllers: [UserPaymentController],
  providers: [UserPaymentService]
})
export class UserPaymentModule {}
