const productModel = require('../models/product')

exports.all = (req, res) => {
  res.json(productModel.all())
}

exports.create = (req, res) => {
  const id = parseInt(req.body.id)
  const created = productModel.create(id, req.body)
  res.status(201).json(created)
}

exports.delete = (req, res) => {
  const id = parseInt(req.params.id)
  const deleted = productModel.delete(id)
  deleted ? res.json({ message: 'Product removed' }) : res.status(404).json({ error: 'Product not found' })
}

exports.count = (req, res) => {
  res.json({ total: productModel.count() })
}

exports.findByName = (req, res) => {
  const name = req.params.name
  const product = productModel.findByName(name)
  product ? res.json(product) : res.status(404).json({ error: 'Product not found' })
}

exports.findByID = (req, res) => {
  const id = parseInt(req.params.id)
  const product = productModel.findByID(parseInt(id))
  product ? res.json(product) : res.status(404).json({ error: 'Product not found' })
}
