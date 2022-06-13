const { ApolloServer,gql } = require('apollo-server')
const userSchema = require('../user/schema/user.graphql')
const useResolvers = require('../user/resolvers/userResolvers')

const typeDefs = [userSchema]
const resolvers = [useResolvers]

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then((url) => {
  console.log(`Servidor rodando na porta ${url}`)
} )