import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { SpreadStatus } from "./spread-status.enum";

@Entity()
export class Spread extends BaseEntity { //create를 쉽게 만들게 도와줌 entity class는 데이터베이스로 변환되는 클래스
    @PrimaryGeneratedColumn()
    no: number; //기본키

    @Column({ name: 'intra_no', nullable: true })
    intra_no: string;

    @Column({ name: 'intra_id', nullable: true })
    intra_id: string;
    
    @Column({ name: 'name', nullable: true })
    name: string;
    
    @Column({ name: 'classno', nullable: true })
    classno: string;

    @Column({ name: 'start', nullable: true })
    start: string;

    @Column({ name: 'co', nullable: true })
    co: string;

    @Column({ name: 'academy', nullable: true })
    academy: string;
}