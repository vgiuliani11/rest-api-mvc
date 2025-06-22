const fs = require('fs')
const db = './data/db.json'

function loadData() {
  if (!fs.existsSync('./data/db.json')) {
    return []
  }

  const data = fs.readFileSync(db)
  return JSON.parse(data).products
}

const products = loadData()

module.exports = {
  all() {
    return products
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
    return { route: 'name', product: products.find((p) => p.name?.toLowerCase() === name.toLowerCase()) }
  },
  findByID(id) {
    return { route: 'id', product: products.find((p) => p.id === id) }
  }
}
