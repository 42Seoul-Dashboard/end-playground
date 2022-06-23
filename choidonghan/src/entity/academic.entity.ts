import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

//학습데이터
@Entity()
export class UserLearningDate extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "coalition_score", nullable: false, default: 0 })
    coalition_score: number;
    
    @Column({name: "out_circle", nullable: false, default: "N" })
    out_circle: string;

    @Column({name: "out_circle_date", nullable: true })
    out_circle_date: Date;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//과정진행여부
@Entity()
export class UserProcessProgress extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "basic_expiration_date", nullable: false, default: "9999-12-31" })
    basic_expiration_date: Date;
    
    @Column({name: "request_extension", nullable: true})
    request_extension: string;

    @Column({name: "final_expiration_date", nullable: false, default: "9999-12-31" })
    final_expiration_date: Date;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//블랙홀
@Entity()
export class UserBlackhole extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "remaining_period", nullable: true })
    remaining_period: number;
    
    @Column({name: "blackhole_time", nullable: false, default: "9999-12-31" })
    blackhole_time: Date;

    @Column({name: "reason_of_blackhole", nullable: true })
    reason_of_blackhole: string;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//휴학
@Entity()
export class UserLeaveOfAbsence extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "start_absence_date", nullable: true })
    start_absence_date: Date;
    
    @Column({name: "end_absence_date", nullable: true })
    end_absence_date: Date;

    @Column({name: "return_from_absence_date", nullable: true })
    return_from_absence_date: Date;
    
    @Column({name: "absence_reason", nullable: true })
    absence_reason: string;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}


//과정중단
@Entity()
export class UserReasonOfBreak extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "date_of_break", nullable: true })
    date_of_break: number;
    
    @Column({name: "reason_of_break", nullable: false, default: "9999-12-31" })
    reason_of_break: Date;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}


//라피신정보관리
@Entity()
export class UserLapiscineInformation extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "lapiscine_grade", nullable: true })
    lapiscine_grade: number;
    
    @Column({name: "lapiscine_degree", nullable: false, default: "9999-12-31" })
    lapiscine_degree: number;

    @Column({name: "participate_lapicin", nullable: true })
    participate_lapicin: string;

    @Column({name: "number_of_rapicin_participation", nullable: true })
    number_of_rapicin_participation: string;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}
