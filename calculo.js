const Cart = require('./cart.json')
//console.log(Cart)

// 3. imprimir o nome de cada produto no cart.
for (let i = 0; i < Cart.items.length; i++) {
  console.log(
    'Produto Comprado:',
    Cart.items[i].title,

    '********',
    'quantidade: ',
    Cart.items[i].quantity
  )
}

// 1. calcular a quantidade de produtos no objeto cart.
let qtd = Cart.items.reduce((acc, current) => acc + current.quantity, 0)
console.log('Quantidade Total Comprada:', qtd)

// 2. somar o valor total do cart.
let valorTotal = Cart.items
  .map(item => item.quantity * item.price)
  .reduce((acc, current) => acc + current, 0)
console.log('Valor Total R$:', valorTotal)
