const fs = require('fs')
const db = './data/db.json'

function loadData() {
  if (!fs.existsSync('./data/db.json')) {
    return []
  }

  const data = fs.readFileSync(db)
  return JSON.parse(data)
}

function saveData(data) {
  fs.writeFileSync(db, JSON.stringify(data, null, 2))
}

const data = loadData()
const products = data.products

module.exports = {
  all() {
    return products
  },
  create(id, product) {
    console.log(product)
    console.log(id)
    if (id) {
      const existing = products.findIndex((p) => p.id === id)
      console.log(existing)
      if (existing >= 0) {
        products[existing] = { ...products[existing], ...product }
        saveData(data)
        return products[existing]
      }
    }

    const lastID = products.at(-1)?.id ?? 0
    products.push({ ...product, id: lastID + 1 })
    saveData(data)
    return products.at(-1)
  },
  delete(id) {
    const deleted = products.findIndex((p) => p.id === id)
    if (deleted >= 0) {
      products.splice(deleted, 1)
      saveData(data)
      return 'Product removed'
    }

    return 'Error: Product not found'
  },
  count() {
    return products.length
  },
  findByName(name) {
    return products.find((p) => p.name?.toLowerCase() === name.toLowerCase())
  },
  findByID(id) {
    return products.find((p) => p.id === id)
  }
}
