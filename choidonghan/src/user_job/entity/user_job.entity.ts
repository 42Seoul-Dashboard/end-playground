import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user_information/entity/user_information.entity";

//취창업지원관리
@ObjectType()
@Entity()
export class UserEmploymentAndFound extends BaseEntity {
    @Field(type => Int)
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field({ nullable: false, defaultValue: "N" })
    @Column({name: "employment", nullable: false, default: "N" })
    employment: string;
    
    @Field({ nullable: true })
    @Column({name: "employment_date", nullable: true })
    employment_date: Date;

    @Field({ nullable: true })
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

    @Field({ nullable: true })
    @Column({name: "start_intern_date", nullable: true })
    start_intern_date: number;
    
    @Field({ nullable: true })
    @Column({name: "end_intern_date", nullable: true})
    end_intern_date: number;

    @Field({ nullable: true })
    @Column({name: "enterprise", nullable: true })
    enterprise: Date;

    @Field({ nullable: true })
    @Column({name: "intern_part_of_job", nullable: true })
    intern_part_of_job: number;

    @Field({ nullable: true })
    @Column({name: "intern_blackhole", nullable: true })
    intern_blackhole: number;

    @Field({ nullable: true })
    @Column({name: "intern_blackhole_date", nullable: true })
    intern_blackhole_date: Date;

    @Field({ nullable: true })
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

    @Field({ nullable: false })
    @Column({name: "consent_to_provide_information", nullable: false, default: "N" })
    consent_to_provide_information: string;
    
    @Field({ nullable: true })
    @Column({name: "employment_insurance_date", nullable: true })
    employment_insurance_date: Date;

    @Field({ nullable: true })
    @Column({name: "enterprise_size", nullable: true })
    enterprise_size: string;

    @Field({ nullable: true })
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

    @Field({ nullable: true })
    @Column({name: "emplyment_date", nullable: true })
    emplyment_date: Date;
    
    @Field({ nullable: true })
    @Column({name: "enterprise", nullable: true })
    enterprise: string;

    @Field({ nullable: false })
    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}