import { Field, ObjectType } from "@nestjs/graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user_information.entity";

//기타정보
@ObjectType()
@Entity()
export class UserOtherInformation extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn({name: "pk"})
    pk: number

    @Field()
    @Column({name: "highest_level_of_education", nullable: true })
    highest_level_of_education: string;
    
    @Field()
    @Column({name: "major", nullable: false, default: "비전공" })
    major: string;

    @Field()
    @Column({name: "major_field", nullable: true})
    major_field: string;

    @Field()
    @Column({name: "major_name", nullable: true })
    major_name: Date;

    @Field()
    @Column({name: "period_of_software_learning", nullable: true })
    period_of_software_learning: string;

    @Field()
    @Column({name: "experience_of_software_developing", nullable: true })
    experience_of_software_developing: Date;

    @Field()
    @CreateDateColumn({name: "created_date"})    
    created_date: Date;

    @ManyToOne(() => User, user => user.userOtherInformation) 
    user: User;
}
