import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from './user_information.entity';

//개인정보관리
@Entity()
@ObjectType()
export class UserPersonalInformation {
  @Field((type) => Int)
  @PrimaryColumn()
  pk: number;

  @Field()
  @Column({ name: 'region', nullable: true })
  region: string;

  @Field()
  @Column({ name: 'gender', nullable: true })
  gender: string;

  @Field()
  @Column({ name: 'birthday', nullable: true })
  birthday: string;

  @Field()
  @Column({ name: 'phone_number', nullable: true })
  phone_number: string;

  @Field()
  @Column({ name: 'email', nullable: true })
  email: string;

  @Field()
  @CreateDateColumn({ name: 'created_date' })
  created_date: Date;

  @OneToOne(() => User, (user) => user.userPersonalInformation)
  @JoinColumn()
  // @PrimaryColumn({name: "user"})
  user: User;
}
