import React, { useState, useContext } from 'react'
import priceFormat from '../utils/priceFormat'
import {
  Tag,
  SizeButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from '../styles/components'
import { SEO, Stars } from '../components'
import { CartContext } from '../context'

const ProductDetail = ({
  price,
  sku,
  product: {
    name,
    metadata,
    metadata: { wear = '', description = '' },
  },
}) => {
  const formatedPrice = priceFormat(price)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)
  const handleSetSize = (e) => setSize(e.target.value)
  
  const handleAddToCart = () => {
    addToCart({ price, sku, name, metadata, quantity: qty })
  }

  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatedPrice}</b>
        <Stars />
        { wear && <h3>Color: Blue</h3> }
        <small>{description}</small>
        {
          wear && (
            <SizeSelect selected={size}>
              <SizeButton onClick={handleSetSize} value='1'>XS</SizeButton>
              <SizeButton onClick={handleSetSize} value='2'>S</SizeButton>
              <SizeButton onClick={handleSetSize} value='3'>M</SizeButton>
              <SizeButton onClick={handleSetSize} value='4'>L</SizeButton>
              <SizeButton onClick={handleSetSize} value='5'>XL</SizeButton>
            </SizeSelect>
          )
        }
        <p>Quantity: </p>
        <QtySelect>
          <button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</button>
          <input type="text" disabled value={qty} />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </QtySelect>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail