import React from 'react'

import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='

export const Category = ({ cover = DEFAULT_IMAGE, path = '', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} alt={emoji} />
    {emoji}
  </Link>
)
