import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key) // eslint-disable-line no-undef
      return item != null ? JSON.parse(item) : initialValue
    } catch (e) {
      console.error(e)
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      localStorage.setItem(key, value) // eslint-disable-line no-undef
      setValue(value)
    } catch (e) {
      setValue(value)
      console.error(e)
    }
  }

  return { value, setLocalStorage }
}
