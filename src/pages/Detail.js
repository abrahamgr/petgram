import React from 'react'
import { gql, useQuery } from '@apollo/client'

import { PhotoCard } from '../components/photocard'
import { ListOfCategories } from '../components/list-of-categories'

const query = gql`
  query photo($id: ID!) {
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

export const Detail = ({ detailId }) => {
  const { data, loading, error } = useQuery(query, { variables: { id: detailId } })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <ListOfCategories />
      <PhotoCard {...data?.photo} />
    </>
  )
}