import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user_information/entity/user_information.entity";

//학습데이터
@ObjectType()
@Entity()
export class UserLearningData extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field({ nullable: false, defaultValue: 0 })
    @Column({name: "coalition_score", nullable: false, default: 0 })
    coalition_score: number;
    
    @Field({ nullable: false, defaultValue: "N" })
    @Column({name: "out_circle", nullable: false, default: "N" })
    out_circle: string;

    @Field({ nullable: true })
    @Column({name: "out_circle_date", nullable: true })
    out_circle_date: Date;

    @Field({ nullable: false })
    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//과정진행여부
@ObjectType()
@Entity()
export class UserProcessProgress extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field({ nullable: false , defaultValue: "9999-12-31"})
    @Column({name: "basic_expiration_date", nullable: false, default: "9999-12-31" })
    basic_expiration_date: Date;
    
    @Field({ nullable: true })
    @Column({name: "request_extension", nullable: true })
    request_extension: string;

    @Field({ nullable: false, defaultValue: "9999-12-31" })
    @Column({name: "final_expiration_date", nullable: false, default: "9999-12-31" })
    final_expiration_date: Date;

    @Field({ nullable: false })
    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//블랙홀
@ObjectType()
@Entity()
export class UserBlackhole extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field({ nullable: true })
    @Column({name: "remaining_period", nullable: true })
    remaining_period: number;
    
    @Field({ nullable: false, defaultValue: "9999-12-31" })
    @Column({name: "blackhole_time", nullable: false, default: "9999-12-31" })
    blackhole_time: Date;

    @Field({ nullable: true })
    @Column({name: "reason_of_blackhole", nullable: true })
    reason_of_blackhole: string;

    @Field({ nullable: false })
    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//휴학
@ObjectType()
@Entity()
export class UserLeaveOfAbsence extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field({ nullable: true })
    @Column({name: "start_absence_date", nullable: true })
    start_absence_date: Date;
    
    @Field({ nullable: true })
    @Column({name: "end_absence_date", nullable: true })
    end_absence_date: Date;

    @Field({ nullable: true })
    @Column({name: "return_from_absence_date", nullable: true })
    return_from_absence_date: Date;
    
    @Field({ nullable: true })
    @Column({name: "absence_reason", nullable: true })
    absence_reason: string;

    @Field({ nullable: false })
    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}


//과정중단
@ObjectType()
@Entity()
export class UserReasonOfBreak extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field({ nullable: true })
    @Column({name: "date_of_break", nullable: true })
    date_of_break: number;
    
    @Field({ nullable: false, defaultValue: "9999-12-31" })
    @Column({name: "reason_of_break", nullable: false, default: "9999-12-31" })
    reason_of_break: Date;

    @Field({ nullable: false })
    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}


//라피신정보관리
@ObjectType()
@Entity()
export class UserLapiscineInformation extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field({ nullable: true })
    @Column({name: "lapiscine_grade", nullable: true })
    lapiscine_grade: number;
    
    @Field({ nullable: false, defaultValue: "0" })
    @Column({name: "lapiscine_degree", nullable: false, default: "0" })
    lapiscine_degree: number;

    @Field({ nullable: true })
    @Column({name: "participate_lapicin", nullable: true })
    participate_lapicin: string;

    @Field({ nullable: true })
    @Column({name: "number_of_rapicin_participation", nullable: true })
    number_of_rapicin_participation: string;

    @CreateDateColumn({name: "created_date"})    
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}
