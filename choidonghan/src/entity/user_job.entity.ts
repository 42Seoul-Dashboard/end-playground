import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user_information.entity";

//취창업지원관리
@ObjectType()
@Entity()
export class UserEmploymentAndFound extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field()
    @Column({name: "employment", nullable: false, default: "N" })
    employment: string;
    
    @Field()
    @Column({name: "employment_date", nullable: true })
    employment_date: Date;

    @Field()
    @Column({name: "enterprise", nullable: true })
    enterprise: string;

    @Field()
    @CreateDateColumn({name: "created_date"})    
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//인턴현황
@ObjectType()
@Entity()
export class UserInternStatus extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field()
    @Column({name: "start_intern_date", nullable: true })
    start_intern_date: number;
    
    @Field()
    @Column({name: "end_intern_date", nullable: true})
    end_intern_date: number;

    @Field()
    @Column({name: "enterprise", nullable: true })
    enterprise: Date;

    @Field()
    @Column({name: "intern_part_of_job", nullable: true })
    intern_part_of_job: number;

    @Field()
    @Column({name: "intern_blackhole", nullable: true })
    intern_blackhole: number;

    @Field()
    @Column({name: "intern_blackhole_date", nullable: true })
    intern_blackhole_date: Date;

    @Field()
    @Column({name: "intern_note", nullable: true })
    intern_note: number;

    @Field()
    @CreateDateColumn({name: "created_date"})        
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//HRD-Net 활용
@ObjectType()
@Entity()
export class UserHrdNetUtilize extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field()
    @Column({name: "consent_to_provide_information", nullable: false, default: "N" })
    consent_to_provide_information: string;
    
    @Field()
    @Column({name: "employment_insurance_date", nullable: true })
    employment_insurance_date: Date;

    @Field()
    @Column({name: "enterprise_size", nullable: true })
    enterprise_size: string;

    @Field()
    @Column({name: "enterprise", nullable: true })
    enterprise: string;

    @Field()
    @CreateDateColumn({name: "created_date"})    
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//기타취업현황
@ObjectType()
@Entity()
export class UserEmploymentStatus extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field()
    @Column({name: "emplyment_date", nullable: true })
    emplyment_date: Date;
    
    @Field()
    @Column({name: "enterprise", nullable: true })
    enterprise: string;

    @Field()
    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}