import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user_information.entity";

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

    @ManyToOne(() => User, user => user.userOtherInformation) 
    user: User;
}
