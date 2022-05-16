import { useState, useEffect, useRef } from 'react'

export const useNearScreen = (localStorageKey) => {
  const element = useRef(null)
  const [ show, setShow ] = useState(false)

  useEffect(() => {
    // check if IntersectionObserver already exists
    const promise = Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        // dynamic import = load intersection observer only when needed and run code when it's ready
        : import('intersection-observer')
    )
    promise.then(() => {
      const observer = new IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        // console.log(isIntersecting)
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [ element ])

  return { element, show }
}