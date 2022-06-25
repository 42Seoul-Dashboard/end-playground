import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Filter {
  @Field()
  entityName: string;
  @Field()
  column: string;
  @Field()
  operator: string;
  @Field()
  givenValue: string; //이렇게 물음표 안붙으면 필수값이라는 뜻
  @Field()
  comment: string; //이렇게 물음표 붙이면 '필수값이 아니'라는 뜻
}
