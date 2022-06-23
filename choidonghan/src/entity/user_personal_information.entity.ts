import { BaseEntity, Column, Entity, OneToOne, PrimaryColumn} from "typeorm";
import { User } from "./user_information.entity";

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

    @OneToOne(() => User, user => user.userPersonalInformation) 
    @PrimaryColumn({name: "intra_no"})
    user: User;
}