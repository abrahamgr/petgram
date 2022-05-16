import { useEffect, useState } from 'react'

export const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3500/categories').then(response => response.json())
      .then(data => {
        setLoading(false)
        setCategories(data)
      })
  }, [])

  return { categories, loading }
}
