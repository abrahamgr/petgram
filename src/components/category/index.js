import React from 'react'

import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt={emoji} />
    {emoji}
  </Anchor>
)
