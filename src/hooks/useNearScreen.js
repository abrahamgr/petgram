import { useState, useEffect, useRef } from 'react'

export const useNearScreen = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // check if IntersectionObserver already exists
    /* eslint-disable no-undef */
    const promise = Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        // dynamic import = load intersection observer only when needed and run code when it's ready
        : import('intersection-observer')
    )
    promise.then(() => {
      const observer = new IntersectionObserver((entries) => { // eslint-disable-line no-undef
        const { isIntersecting } = entries[0]
        // console.log(isIntersecting)
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])
  /* eslint-disable no-undef */

  return { element, show }
}
