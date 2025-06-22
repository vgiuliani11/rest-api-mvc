const express = require('express')
const app = express()

app.use(express.json())

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

const productController = require('./controllers/productController')

app.get('/product/', productController.all)
app.post('/product/', productController.create)
app.delete('/product/:id', productController.delete)
app.get('/product/count', productController.count)
app.get('/product/name/:name', productController.findByName)
app.get('/product/:id', productController.findByID)
