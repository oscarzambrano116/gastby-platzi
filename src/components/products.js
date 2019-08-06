import React from 'react'
import { Link } from 'gatsby'
import formatPrice from '../utils/priceFormat'
import { StyledProducts } from '../styles/components'

const Products = ({ products }) => {
  return (
    <StyledProducts>
      <h2>Products</h2>
      <section>
        {
          products.map(({ node }) => {
            const price = formatPrice(node.price)
            return (
              <article key={node.id}>
                <img src={node.product.metadata.img} alt={node.product.name}/>
                <p>{node.product.name}</p>
                <small>USD {price}</small>
                <Link to={`/${node.id}`}>Buy now <span role='img' aria-label='emoji'>→</span></Link>
              </article>
            )
          })
        }
      </section>
    </StyledProducts>
  )
}

export default Products