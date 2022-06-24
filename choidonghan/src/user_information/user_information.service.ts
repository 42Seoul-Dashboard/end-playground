import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccessCardInformation } from 'src/user_information/entity/user_access_card_information.entity';
import { User } from 'src/user_information/entity/user_information.entity';
import { UserOtherInformation } from 'src/user_information/entity/user_other_information.entity';
import { UserPersonalInformation } from 'src/user_information/entity/user_personal_information.entity';
import { UserBlackhole } from 'src/user_status/entity/user_status.entity';
import { createQueryBuilder, DataSource, Repository } from 'typeorm';

@Injectable()
export class UserInformationService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserPersonalInformation)
    private userPersonalRepository: Repository<UserPersonalInformation>,
    @InjectRepository(UserOtherInformation)
    private userOtherRepository: Repository<UserOtherInformation>,
    @InjectRepository(UserAccessCardInformation)
    private userAccessCardRepository: Repository<UserAccessCardInformation>,
    private dataSource: DataSource,
  ) {}

  async getUserByhuchoi() {
    let temp = await this.userRepository.query(
      `SELECT * FROM user NATURAL JOIN user_blackhole`,
    );
    console.log(temp);
    console.log('---------------------------------');

    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    temp = await queryRunner.manager
      .createQueryBuilder(User, 'user')
      .leftJoinAndSelect(
        'user.userBlackhole',
        'blackhole', //innerJoinAndSelect가 outerJoin인듯?
        'blackhole.remaining_period > :period',
        { period: 90 },
      ) //오버로딩을 생각하자
      .leftJoinAndSelect(
      'user.userOtherInformation', 'user_other_information')
      .getMany();
    console.log(temp);
    
    temp = this.userRepository.find({where:{intra_id:"hanchoi"}});
    return temp;
    return temp;
    await queryRunner.release();
    return await this.userRepository.find({});
  }
  async getUserPersonalInformation() {
    return await this.userPersonalRepository.find({});
  }
  async getUserOtherInformation() {
    return await this.userOtherRepository.find({});
  }
  async getUserAccessCardInformation() {
    return await this.userAccessCardRepository.find({});
  }
}
