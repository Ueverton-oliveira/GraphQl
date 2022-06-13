const arrayUsers = [
  {
    nome: 'Valentina',
    ativo: true
  },
  {
    nome: 'Izabela',
    ativo: false
  }
]

const useResolvers = {
  Query: {
    users: () => arrayUsers,
    primeiroUser: () => arrayUsers[0]
  }
}

module.export = useResolvers