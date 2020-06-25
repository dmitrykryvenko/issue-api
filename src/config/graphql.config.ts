import { assign, get, map, set } from 'lodash';
import { join } from 'path';

const { GQL_INTROSPECTION, GQL_PLAYGROUND, GQL_DEBUG, GQL_TRACING } = process.env;
const nameSpaces = [
  'issue',
];

const resolvers = {
  Mutation: assign({}, ...map(nameSpaces, (key: string) => set({}, key, () => ({})))),
};

export default {
  typePaths: ['./**/*.graphql'],
  introspection: GQL_INTROSPECTION === 'true',
  playground: GQL_PLAYGROUND === 'true',
  debug: GQL_DEBUG === 'true',
  resolvers,
  definitions: {
    path: join(process.cwd(), 'src/graphql.schema.ts'),
    outputAs: 'interface',
  },
  tracing: GQL_TRACING === 'true',
  // (server url)/.well-known/apollo/server-health
  disableHealthCheck: false,
};
