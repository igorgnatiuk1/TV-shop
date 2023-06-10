const express = require('express')
const { engine } = require ('express-handlebars');
const products = require('./public/base/base.json')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'hbs')
app.engine(
    'hbs',
    engine({
        extname: 'hbs'
    }));


app.get('/', (req, res) => {
    
    res.render('products', {products, styleName: 'products'})
})

app.get('/:productId', (req, res) => {
    const product = products.find(el => el.id === req.params.productId)
    res.render('product', {product, styleName: 'product'})
})

app.listen(4444, () => {
    console.log('good')
})