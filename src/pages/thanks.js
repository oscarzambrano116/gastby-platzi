import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

const Thanks = () => {
  return (
    <div>
      <SEO title="successful purchase" />
      <Purchase>
        <h2>Successful Purchase</h2>
        <p>I hope you enjoy your swag</p>
        <p>Don't stop learning</p>
        <span role="img" aria-label="emoji">❤️</span>
        <Link to='/'>
          <Button>Back to Catalogue</Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default Thanks
