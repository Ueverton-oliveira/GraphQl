const { ApolloServer,gql } = require('apollo-server')
const userSchema = require('../user/schema/user.graphql')

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

const typeDefs = [userSchema]
const resolvers = {}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then((url) => {
  console.log(`Servidor rodando na porta ${url}`)
} )