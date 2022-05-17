import React, { useRef, useState, useEffect } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

import { Button, Img, ImgWrapper, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0, liked }) => {
  const localStorageKey = `like-${id}`

  const { value: alreadyLike, setLocalStorage } = useLocalStorage(localStorageKey, liked)
  const { show, element } = useNearScreen(localStorageKey)

  const Icon = alreadyLike ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {show && <>
        <a href={`/?detailId=${id}`}>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
        </a>
        <Button type='button' onClick={() => setLocalStorage(!alreadyLike)}>
          <Icon size='32px' />{likes}{' '} likes!
        </Button>
      </>}
    </Article>
  )
}
