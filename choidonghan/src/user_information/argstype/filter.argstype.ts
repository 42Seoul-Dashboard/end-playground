import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { Filter } from '../filter';

@ArgsType()
export class FilterArgs {
  @Field((type) => GraphQLJSON)
  filters: JSON;

}
