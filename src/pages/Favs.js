import React from 'react'
import { gql, useQuery } from '@apollo/client'

import { ListOfFavs } from '../components/list-of-favs'

const getFavsQuery = gql`
  query getFavs {
    favs {
      id,
      categoryId,
      src,
      likes,
      userId
    }
  }
`

export const Favs = () => {
  const { data, loading, error } = useQuery(getFavsQuery, { fetchPolicy: 'cache-and-network' })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <h1>Favs</h1>
      <ListOfFavs favs={data.favs || []} />
    </>
  )
}
