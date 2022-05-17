import React, { useEffect, useState } from 'react'

import { useCategoriesData } from '../../hooks/useCategoriesData'
import { Category } from '../category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
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
            <Category {...category} />
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
