import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

//유저
@Entity()
export class User extends BaseEntity {

    @PrimaryColumn({name: "intra_no"})
    intra_no: number;

    @Column({name: "intra_id", nullable: false, default: "NOT_EXIST" })
    intra_id: string;
    
    @Column({name: "intra_id", nullable: false, default: "NO_NAME" })
    name: string;

    @Column({name: "grade", nullable: false, default: "0기" })
    grade: string;

    @Column({name: "start_process", nullable: false, default: "9999-12-31" })
    start_process: Date;

    @Column({name: "academic_state", nullable: false, default: "BLACK_HOLE" })
    academic_state: string;

    @Column({name: "coalition", nullable: true })
    coalition: string;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @OneToOne(() => UserPersonalInformation, userPersonalInformation => userPersonalInformation.user) 
    userPersonalInformation: UserPersonalInformation;

    @OneToOne(() => UserAccessCardInformation, userAccessCardInformation => userAccessCardInformation.user) 
    userAccessCardInformation: UserAccessCardInformation;

    @ManyToOne(() => UserOtherInformation, userOtherInformation => userOtherInformation.user)
    userOtherInformation: UserOtherInformation;
}

//개인정보관리
@Entity()
export class UserPersonalInformation extends BaseEntity {

    @Column({name: "region", nullable: true })
    region: string;
    
    @Column({name: "gender", nullable: true })
    gender: string;

    @Column({name: "birthday", nullable: true})
    birthday: string;

    @Column({name: "phone_number", nullable: true })
    phone_number: Date;

    @Column({name: "email", nullable: true })
    email: string;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @OneToOne(() => User, user => user.intra_no) 
    user: User;
}

//기타정보
@Entity()
export class UserOtherInformation extends BaseEntity {
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Column({name: "highest_level_of_education", nullable: true })
    highest_level_of_education: string;
    
    @Column({name: "major", nullable: false, default: "비전공" })
    major: string;

    @Column({name: "major_field", nullable: true})
    major_field: string;

    @Column({name: "major_name", nullable: true })
    major_name: Date;

    @Column({name: "period_of_software_learning", nullable: true })
    period_of_software_learning: string;

    @Column({name: "experience_of_software_developing", nullable: true })
    experience_of_software_developing: Date;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @ManyToOne(() => User, user => user.intra_no) 
    user: User;
}

//출입카드정보
@Entity()
export class UserAccessCardInformation extends BaseEntity {

    @Column({name: "profile_picture", nullable: true })
    profile_picture: string;
    
    @Column({name: "lapiscine_access_card_number_of_physical", nullable: true })
    lapiscine_access_card_number_of_physical: number;

    @Column({name: "lapiscine_access_card_number_of_logical", nullable: true})
    lapiscine_access_card_number_of_logical: number;

    @Column({name: "logical_number_of_access_card_for_this_course", nullable: true })
    logical_number_of_access_card_for_this_course: number;

    @Column({name: "name_of_entry_card_for_this_course", nullable: true })
    name_of_entry_card_for_this_course: string;

    @Column({name: "created_date", nullable: false })
    created_date: Date;

    @OneToOne(() => User, user => user.intra_no) 
    user: User;
}
