const productModel = require('../models/product')

exports.all = (req, res) => {
  res.json(productModel.all())
}

exports.create = (req, res) => {
  const created = productModel.create(req.body)
  res.status(201).json(created)
}

exports.delete = (req, res) => {
  const id = parseInt(req.params.id)
  const deleted = productModel.delete(id)
  res.json(deleted)
}

exports.count = (req, res) => {
  res.json(productModel.count())
}

exports.findByName = (req, res) => {
  const name = req.params.name
  const product = productModel.findByName(name)
  res.json(product)
}

exports.findByID = (req, res) => {
  const id = req.params.id
  const product = productModel.findByID(id)
  res.json(product)
}
