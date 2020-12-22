import ApolloClient from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: 'https://factual-phoenix-99.hasura.app/v1/graphql'
});

export default apolloClient;