import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  UserComputationFund,
  UserEducationFundState,
} from 'src/user_payment/entity/user_payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserPaymentService {
  constructor(
    @InjectRepository(UserComputationFund)
    private readonly userComputationFund: Repository<UserComputationFund>,
    @InjectRepository(UserEducationFundState)
    private readonly userEducationFundState: Repository<UserEducationFundState>,
  ) {}

  async getUserComputationFund(): Promise<UserComputationFund[]> {
    return await this.userComputationFund.find({});
  }

  async geUserEducationFundState(): Promise<UserEducationFundState[]> {
    return await this.userEducationFundState.find({});
  }
}
