import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn} from "typeorm";
import { User } from "./user_information.entity";
//출입카드정보
@Entity()
@ObjectType()
export class UserAccessCardInformation extends BaseEntity {

    @Field()
    @PrimaryColumn()
    pk:number

    @Field()
    @Column({name: "profile_picture", nullable: true })
    profile_picture: string;
    
    @Field()
    @Column({name: "lapiscine_access_card_number_of_physical", nullable: true })
    lapiscine_access_card_number_of_physical: number;

    @Field()
    @Column({name: "lapiscine_access_card_number_of_logical", nullable: true})
    lapiscine_access_card_number_of_logical: number;

    @Field()
    @Column({name: "logical_number_of_access_card_for_this_course", nullable: true })
    logical_number_of_access_card_for_this_course: number;

    @Field()
    @Column({name: "name_of_entry_card_for_this_course", nullable: true })
    name_of_entry_card_for_this_course: string;

    @Field()
    @CreateDateColumn({name: "created_date"})
    created_date: Date;

    @OneToOne(() => User, user => user.userAccessCardInformation) 
    user: User;
}
