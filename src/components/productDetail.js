import React, { useState } from 'react'
import priceFormat from '../utils/priceFormat'
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from '../styles/components'
import { SEO } from '../components'

const ProductDetail = ({
  price,
  sku: id,
  product: {
    name,
    metadata,
  },
}) => {
  const formatedPrice = priceFormat(price)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const handleSetSize = (e) => setSize(e.target.value)
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatedPrice}</b>
        {
          metadata.wear && (
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
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail