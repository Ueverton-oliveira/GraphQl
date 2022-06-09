const { ApolloServer,gql } = require('apollo-server')

const users = [
  {
    nome: 'Valentina',
    ativo: true
  },
  {
    nome: 'Izabela',
    ativo: false
  }
]

const typeDefs = gql`
  type User {
    nome: String!
    ativo: Boolean!
    email: String
  }
`

const server = new ApolloServer({ typeDefs, resolvers })