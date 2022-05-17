import React from 'react'
import { gql, useQuery } from '@apollo/client'

import { PhotoCard } from '../components/photocard'

const query = gql`
  query photo($id: ID!+) {
    photo(id: $id) {
      id,
      categoryId,
      src,
      likes,
      userId,
      liked      
    }
  } 
`

export const PhotocardWithQuery = ({ detailId }) => {
  const { data, loading, error } = useQuery(query, { variables: { id: detailId } })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <PhotoCard {...data?.photo} />
  )
}
