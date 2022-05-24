import React, { useEffect, useState } from 'react'

import { useCategoriesData } from '../../hooks/useCategoriesData'
import { Category } from '../category'
import { List, Item } from './styles'

const ListOfCategoriesComponent = () => {
  const { categories, loading, error } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map((category) => (
          <Item key={`cat_${category.id}`}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>
        )
        )
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
