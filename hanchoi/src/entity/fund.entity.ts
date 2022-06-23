import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

//지원금산정
@Entity()
export class UserComputationFund extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "no_duplicate_collection", nullable: false, default: "N" })
    no_duplicate_collection: string;
    
    @Column({name: "reason_of_no_duplicate", nullable: true })
    reason_of_no_duplicate: string;

    @Column({name: "received_fund", nullable: false, default: "N"})
    majoreceived_fundr_field: string;

    @Column({name: "recevied_grant_amount", nullable: false, default: 0 })
    recevied_grant_amount: number;

    @Column({name: "payment_date", nullable: true })
    payment_date: Date;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//지원금지급현황
@Entity()
export class UserEducationFundState extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "total_payment_of_number", nullable: false, default: 0 })
    total_payment_of_number: number;
    
    @Column({name: "total_payment_of_money", nullable: false, default: 0 })
    total_payment_of_money: number;

    @Column({name: "fund_date", nullable: true })
    fund_date: Date;

    @Column({name: "remaining_date_of_fund", nullable: true })
    remaining_date_of_fund: number;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}
