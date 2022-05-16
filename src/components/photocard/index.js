import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

import { Button, Img, ImgWrapper } from './styles'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => (
    <article>
        <a href={`/detail/${id}`}>
            <ImgWrapper>
                <Img src={src} />
            </ImgWrapper>
        </a>
        <Button type='button'>
            <MdFavoriteBorder size='32px' />{likes}{" "} likes!
        </Button>
    </article>
)