import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user_information.entity";

//취창업지원관리
@Entity()
export class UserEmploymentAndFound extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "employment", nullable: false, default: "N" })
    employment: string;
    
    @Column({name: "employment_date", nullable: true })
    employment_date: Date;

    @Column({name: "enterprise", nullable: true })
    enterprise: string;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//인턴현황
@Entity()
export class UserInternStatus extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "start_intern_date", nullable: true })
    start_intern_date: number;
    
    @Column({name: "end_intern_date", nullable: true})
    end_intern_date: number;

    @Column({name: "enterprise", nullable: true })
    enterprise: Date;

    @Column({name: "intern_part_of_job", nullable: true })
    intern_part_of_job: number;

    @Column({name: "intern_blackhole", nullable: true })
    intern_blackhole: number;

    @Column({name: "intern_blackhole_date", nullable: true })
    intern_blackhole_date: Date;

    @Column({name: "intern_note", nullable: true })
    intern_note: number;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//HRD-Net 활용
@Entity()
export class UserHrdNetUtilize extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "consent_to_provide_information", nullable: false, default: "N" })
    consent_to_provide_information: string;
    
    @Column({name: "employment_insurance_date", nullable: true })
    employment_insurance_date: Date;

    @Column({name: "enterprise_size", nullable: true })
    enterprise_size: string;

    @Column({name: "enterprise", nullable: true })
    enterprise: string;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//기타취업현황
@Entity()
export class UserEmploymentStatus extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "emplyment_date", nullable: true })
    emplyment_date: Date;
    
    @Column({name: "enterprise", nullable: true })
    enterprise: string;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}