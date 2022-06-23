import { BaseEntity, Column, Entity, OneToOne} from "typeorm";
import { User } from "./user_information.entity";
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

    @OneToOne(() => User, user => user.userAccessCardInformation) 
    user: User;
}
