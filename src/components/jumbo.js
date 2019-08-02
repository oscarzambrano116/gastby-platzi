import React from 'react'
import { StyledJumbo } from '../styles/components'
import { Image } from './'

const Jumbo = ({ data }) => {
  const description = data.allSite.edges[0].node.siteMetadata.description

  return (
    <StyledJumbo>
      <div>
        <h2>Find the best swag exclusive and special from Platzi</h2>
        <small>{description}</small>
      </div>
      <Image name="icon" />
    </StyledJumbo>
  )
}

export default Jumbo
