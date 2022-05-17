import { gql, useQuery } from '@apollo/client'

const query = gql`
  query getCategories {
    categories {
      id,
      emoji,
      cover,
      path    
    }
  }
`

export const useCategoriesData = () => {
  const { data, loading, error } = useQuery(query)

  return { categories: data?.categories || [], loading, error }
}
