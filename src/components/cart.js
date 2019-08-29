import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { Button, StyledCart } from '../styles/components'
import priceFormat from '../utils/priceFormat'
import { CartContext } from '../context'

const Cart = () => {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [stripe, setStripe] = useState()

  useEffect(() => {
    setStripe(
      window.Stripe(process.env.STRIPE_PK, {
        betas: ['checkout_beta_4'],
      })
    )
    getTotal()
  }, [])

  const getTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + (current.price * current.quantity),0)
    )
  }

  const handleBuyProducts = async (e) => {
    e.preventDefault()
    const { error } = await stripe.redirectToCheckout({
      items: cart.map(({ sku, quantity }) => ({ sku, quantity})),
      successUrl: process.env.SUCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT,
    })
    if (error) throw error
  }

  return (
    <StyledCart>
      <h2>Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((swag) => {
              return (
                <tr key={swag.sku}>
                  <td>
                    <img src={swag.metadata.img} alt={swag.name} />
                    {swag.name}
                  </td>
                  <td>USD {priceFormat(swag.price)}</td>
                  <td>{swag.quantity}</td>
                  <td>USD {priceFormat(swag.price * swag.quantity)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Total: </h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to='/'>
            <Button type={'outline'}>Go back</Button>
          </Link>
          <Button onClick={handleBuyProducts} disabled={!cart.length}>Buy</Button>
        </div>
      </nav>
    </StyledCart>
  )
}

export default Cart