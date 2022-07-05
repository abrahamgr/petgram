import React from 'react'
import { gql, useQuery } from '@apollo/client'

import { ListOfFavs } from '../components/list-of-favs'
import { Layout } from '../components/layout'

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
// export this way to allow us to use in Reac.lazy
export default () => {
  const { data, loading, error } = useQuery(getFavsQuery, { fetchPolicy: 'cache-and-network' })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Layout title='Favorites'>
      <ListOfFavs favs={data.favs || []} />
    </Layout>
  )
}
