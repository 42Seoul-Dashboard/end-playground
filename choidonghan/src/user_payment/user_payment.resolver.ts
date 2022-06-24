import { Query, Resolver } from '@nestjs/graphql';
import { UserPaymentService } from './user_payment.service';
import { UserComputationFund, UserEducationFundState } from 'src/user_payment/entity/user_payment.entity';

@Resolver()
export class UserPaymentResolver {
    constructor(private readonly userPaymentService:UserPaymentService){}

    @Query(()=>UserComputationFund)
    getUserComputationFund(): Promise <UserComputationFund[]>{
        return this.userPaymentService.getUserComputationFund();
    }

    @Query(() => UserEducationFundState)
    getUserInternStatus(): Promise <UserEducationFundState[]>{
        return this.userPaymentService.geUserEducationFundState();
    }
}
