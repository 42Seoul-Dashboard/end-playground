import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Api42Status } from "./api42-status.enum";

@Entity()
export class Api42 extends BaseEntity { //create를 쉽게 만들게 도와줌 entity class는 데이터베이스로 변환되는 클래스
    @PrimaryGeneratedColumn()
    no: number; //기본키

    @Column({ nullable: true })
    Intra_No: string;

    @Column({ nullable: true })
    Intra_Id: string;
    
    @Column({ nullable: true })
    성명: string;
    
    @Column({ nullable: true })
    기수: string;

    @Column({ nullable: true })
    과정시작: string;

    @Column({ nullable: true })
    코알리숑: string;

    @Column({ nullable: true })
    학적: string;
}