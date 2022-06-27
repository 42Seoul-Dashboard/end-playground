import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccessCardInformation } from 'src/user_information/entity/user_access_card_information.entity';
import { User } from 'src/user_information/entity/user_information.entity';
import { UserOtherInformation } from 'src/user_information/entity/user_other_information.entity';
import { UserPersonalInformation } from 'src/user_information/entity/user_personal_information.entity';
import { UserBlackhole } from 'src/user_status/entity/user_status.entity';
import {
  createQueryBuilder, //deprecated
  DataSource,
  Repository,
  // (ref: https://typeorm.io/find-options)
  Equal,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  Not,
  Like, //
  ILike, //대소문자 구별 안함
  Between, //(ref: https://makand.tistory.com/entry/SQL-BETWEEN-%EA%B5%AC%EB%AC%B8)
  In, //(ref: https://kchanguk.tistory.com/119)
  Any, //In보다 더 많은 기능을 제공 (ref: https://carami.tistory.com/18)
  IsNull,
  ArrayContains,
  ArrayContainedBy,
  ArrayOverlap,
} from 'typeorm';
import { Filter } from './filter';

@Injectable()
export class UserInformationService {
  private operatorToMethod;

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
  ) {
    this.operatorToMethod = {};
    this.operatorToMethod['>'] = MoreThan;
    this.operatorToMethod['>='] = MoreThanOrEqual;
    this.operatorToMethod['<'] = LessThan;
    this.operatorToMethod['<='] = LessThanOrEqual;
    this.operatorToMethod['='] = Equal;
    this.operatorToMethod['!='] = Not;
    this.operatorToMethod['Like'] = Like;
    this.operatorToMethod['ILike'] = ILike;
    this.operatorToMethod['In'] = In;
    this.operatorToMethod['Any'] = Any;
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

  private camelize(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '');
  }

  /**
   * 아래 processFilters()함수에서 만드는 filterObj의 구조
   *    {
   *      엔터티:[filter객체, filter객체...],
   *      엔터티:[filter객체, filter객체...]
   *    }
   * 예시
   *
   *    {
   *      User:[{entityName:User, column:"intra_no", operaotr:"<=", givenValue:"10"}, {...}, {...}]
   *      UserPersonalInformation:[{entityName:UserPersonalInformation, column:"gender", operaotr:"=", givenValue:"남"}, {...}, {...}]
   *    }
   */

  async processFilters(filters) {
    // console.log(filters);
    let filter;
    let entityName;
    let numOfEntity = 1; //entity의 개수(user는 무조건 쓰니까 initialValue = 1)
    const filterObj = {};

    for (let i = 0; i < filters.length; i++) {
      filter = filters[i]; // filter 하나
      entityName = filter.entityName;
      if (entityName in filterObj) {
        // filterObj에 이미 해당 entityName이 있음
        filterObj[entityName].push(filter);
      } else {
        //filterObj에 해당 entityName이 없음
        numOfEntity++;
        filterObj[entityName] = []; //해당 entity에 대해 필터조건이 여러개 있을수 있으니
        filterObj[entityName].push(filter); //필터조건(들)을 배열 넣어둠
      }
    }
    return this.joinTableByCondition(filterObj); //numOFEntity 값을 사용하지는 않지만 일단 넣어두었음
  }

  private async joinTableByCondition(filterObj) {
    // console.log(filterObj);
    const obj = this.getObj(filterObj);
    obj['cache'] = true; //typeORM에서 제공하는 cache 기능
    obj['order'] = { created_date: 'DESC' };
    console.log('OBJ is', obj);
    const ret = await this.dataSource.getRepository(User).find(obj);
    // console.log('RET is', ret);
    return ret;
  }
  /**
   * getObj 함수에서 반환하는 객체의 구조 예시
   *    {
   *      relation:{
   *        UserOtherInformation: true,
   *        UserPersonalInformation: true,
   *      },
   *      where:{
   *        intra_id:LessThan(100),
   *        userPersonalInformation:{
   *          gender: "남"
   *        },
   *        userOtherInformation:{
   *          major: Equal("비전공")
   *        },
   *      }
   *    }
   */

  private getObj(filterObj) {
    let filter;
    let column;
    const ret = {};
    ret['relations'] = {};
    ret['where'] = {};

    if ('user' in filterObj) {
      for (const idx in filterObj['user']) {
        filter = filterObj['user'][idx];
        column = filter['column'];
        if (column == null) continue; // 예외처리
        ret['where'][column] = this.operatorToORMMethod(filter['operator'])(
          filter['givenValue'],
        ); //overwrite issue 발생가능(명세서에 적어줘야함)
      }
    }
    for (const entityName in filterObj) {
      if (entityName == 'user') continue; // user는 이미 위의 for문에서 처리
      ret['relations'][entityName] = true;
      ret['where'][entityName] = {};
      for (const idx in filterObj[entityName]) {
        filter = filterObj[entityName][idx];
        column = filter['column'];
        if (column == null) continue;
        ret['where'][entityName][column] = this.operatorToORMMethod(
          filter['operator'],
        )(filter['givenValue']); //overwrite issue 발생가능(명세서에 적어줘야함)
      }
    }
    return ret;
  }

  private operatorToORMMethod(operator: string) {
    return this.operatorToMethod[operator];
  }

  //--------------------------------------------------
  //      아래 부분은 안보셔도 됩니다. 실습용 테스트 코드.       |
  //--------------------------------------------------
  async querySampel() {
    let temp = await this.userRepository.query(
      `SELECT * FROM user NATURAL JOIN user_blackhole`,
    );

    let queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    temp = await queryRunner.manager
      .createQueryBuilder(User, 'user')
      .leftJoinAndSelect(
        'user.userBlackhole',
        'blackhole', //innerJoin == Join인듯?
        'blackhole.remaining_period > :period AND blackhole.remaining_period > 0',
        { period: 90 },
      ) //오버로딩
      .leftJoinAndSelect('user.userOtherInformation', 'user_other_information')
      .getMany();
    await queryRunner.release();

    queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    temp = await queryRunner.manager.createQueryBuilder();
    queryRunner.release();

    temp = this.userRepository.find({ where: { intra_id: 'hanchoi' } });
    return temp;
  }

  async towJoin(obj, tableCount) {
    if (tableCount != 2 + 1) return;
    let temp;
    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    // eslint-disable-next-line prefer-const
    const arr = [];
    for (const key in obj) {
      arr.push(await this.makeArguments(key, obj[key]));
    }
    console.log(arr);
    // eslint-disable-next-line prefer-const
    console.log(arr[0][0], arr[0][1], arr[0][2]);
    temp = await queryRunner.manager
      .createQueryBuilder(User, 'user')
      .leftJoinAndSelect(
        'user.userOtherInformation',
        'user_other_information', //innerJoinAndSelect가 outerJoin인듯?
        // 'user_other_information.major = :arg1',
        // { arg1: '비전공' },
      ) //오버로딩을 생각하자
      .leftJoinAndSelect(
        'user.userPersonalInformation',
        'user_personal_information', //innerJoinAndSelect가 outerJoin인듯?
        // 'user_personal_information.gender > :arg1',
        // { arg1: '남' },
      ) //오버로딩을 생각하자'
      .getMany();
    temp = await this.userRepository.find({
      relations: ['userOtherInformation', 'userPersonalInformation'],
    });
    temp = await this.dataSource.getRepository(User).findBy({
      intra_no: LessThan(10), // column쪽(좌측)에 문자열 당연히 가능 // 우측엔 동적으로 함수 쓸수있는거 확인!
    });
    const val = 3000;
    const test = {
      relations: {
        //entityname:true
        userPersonalInformation: true,
        userOtherInformation: true,
        userAccessCardInformation: true,
      },
      where: {
        userOtherInformation: [
          // OR 처리할수 있는 실마리가 있음
          {
            pk: this.operatorToORMMethod('<=')(val),
          },
          {
            major: '비전공',
          },
        ],
      },
    };
    temp = await this.dataSource.getRepository(User).find({
      relations: {
        //entityname:true
        userPersonalInformation: true,
        userOtherInformation: true,
        userAccessCardInformation: true,
      },
      where: {
        userOtherInformation: {
          pk: LessThanOrEqual(3000),
        },
      },
    });
    temp = await this.dataSource.getRepository(User).find(test);
    await queryRunner.release();
    return temp;
  }

  async makeArguments(entityName: string, arr) {
    const ret = [];
    ret[0] = `user.${entityName}`;
    ret[1] = entityName
      .replace(/\.?([A-Z]+)/g, function (_x, y) {
        return '_' + y.toLowerCase();
      })
      .replace(/^_/, '');
    ret[2] = new String();
    for (let i = 0; i < arr.length; i++) {
      if (i != 0) ret[2] += ' AND ';
      ret[2] += `${ret[1]}.`;
      ret[2] += `${arr[i].column}`;
      if (arr[i].operator == 'eq') ret[2] += ' = ';
      else if (arr[i].operator == 'gt') ret[2] += ' > ';
      else console.log('\n\n\nERROR in makeArguments function\n\n\n');
      ret[2] += `${arr[i].value}`;
    }
    console.log(ret);
    return ret;
  }
}
