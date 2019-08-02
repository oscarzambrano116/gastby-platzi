import React from 'react'
import { StyledJumbo } from '../styles/components'

const Jumbo = ({ data }) => {
  const description = data.allSite.edges[0].node.siteMetadata.description

  return (
    <StyledJumbo>
      <div>
        <h2>Find the best swag exclusive and special from Platzi</h2>
        <small>{description}</small>
      </div>
    </StyledJumbo>
  )
}

export default Jumbo
