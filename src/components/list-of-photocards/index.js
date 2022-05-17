import React from 'react'
import { gql, useQuery } from '@apollo/client'

import { PhotoCard } from '../photocard'

const query = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`

export const ListOfPhotocards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(query, { variables: { categoryId } })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}
