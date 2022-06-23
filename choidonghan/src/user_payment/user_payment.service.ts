import { Injectable } from '@nestjs/common';
import { UserComputationFund, UserEducationFundState } from 'src/entity/user_payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserPaymentService {
    constructor(
        private userComputationFund: Repository<UserComputationFund>,
        private userEducationFundState: Repository<UserEducationFundState>,
    ){}

    async getUserComputationFund(): Promise <UserComputationFund[]> {
        return await this.userComputationFund.find();
    }
    
    async geUserEducationFundState(): Promise <UserEducationFundState[]> {
        return await this.userEducationFundState.find();
    }  
}


