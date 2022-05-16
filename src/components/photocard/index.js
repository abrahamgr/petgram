import React, { useRef, useState, useEffect } from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

import { Button, Img, ImgWrapper, Article } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {

  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      // console.log(isIntersecting)
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [ element ])

  return <Article ref={element}>
    {show && <>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button type='button'>
        <MdFavoriteBorder size='32px' />{likes}{' '} likes!
      </Button>
    </>}
  </Article>
}
