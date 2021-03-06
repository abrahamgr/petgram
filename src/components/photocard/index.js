import React from 'react'

import PropTypes from 'prop-types'
import { gql, useMutation } from '@apollo/client'
import { Link } from '@reach/router'

import { Img, ImgWrapper, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { Favbutton } from '../favbutton'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
const likePhotoQuery = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto (input: $input){
      id,
      likes,
      liked,
    }
  }
`

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0, liked }) => {
  const { show, element } = useNearScreen()
  const [likePhotoMutate, { loading }] = useMutation(likePhotoQuery)

  const likePhoto = () => {
    if (!loading) {
      // only save to backend when there is no like
      likePhotoMutate({ variables: { input: { id } } })
      // setLocalStorage(!alreadyLike)
    }
  }

  return (
    <Article ref={element}>
      {
        show &&
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <Favbutton liked={liked} likes={likes} onClick={likePhoto} />
          </>
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  },
  liked: PropTypes.bool.isRequired
}