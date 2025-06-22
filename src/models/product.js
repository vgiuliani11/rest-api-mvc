let products = [
  {
    // id (Number),
    // name (String)
  }
]

module.exports = {
  all() {
    return JSON.parse({ route: 'all', products })
  },
  create(id, name) {
    return JSON.parse({ route: 'create', product: { id, name } })
  },
  delete(id) {
    return JSON.parse({ route: 'delete', product: products.find((p) => p.id === id) })
  },
  count() {
    return JSON.parse({ route: 'count', count: products.length })
  },
  findByName(name) {
    return JSON.parse({ route: 'name', product: products.filter((p) => p.name.toLowerCase === name.toLowerCase) })
  },
  findByID(id) {
    return JSON.parse({ route: 'id', product: products.filter((p) => p.id === id) })
  }
}
