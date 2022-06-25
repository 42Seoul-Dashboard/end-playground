import { GraphQLScalarType } from 'graphql';
import { Filter } from './filter';

const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function validate(filter: unknown) {
  return filter;
}

export const CustomUuidScalar = new GraphQLScalarType({
  name: 'FILTER',
  description: 'A simple UUID parser',
  serialize: (value) => validate(value),
  parseValue: (value) => validate(value),
//   parseLiteral: (ast) => validate(ast.value),
});
