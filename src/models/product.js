let products = [
  {
    id: 1,
    name: 1
  },
  {}
]

module.exports = {
  all() {
    return { route: 'all', products }
  },
  create(id, name) {
    return { route: 'create', product: { id, name } }
  },
  delete(id) {
    return { route: 'delete', product: products.find((p) => p.id === id) }
  },
  count() {
    return { route: 'count', count: products.length }
  },
  findByName(name) {
    return { route: 'name', product: products.filter((p) => p.name.toLowerCase === name.toLowerCase) }
  },
  findByID(id) {
    return { route: 'id', product: products.filter((p) => p.id === id) }
  }
}
