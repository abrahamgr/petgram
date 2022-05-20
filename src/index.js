import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import { Provider } from './Context'
import { App } from './App'

const httpLink = createHttpLink({
  uri: 'http://localhost:3500/graphql'
})

const errorLink = onError(({ graphQLErrors, networkError, /* response */ operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'invalid_token':
        case 'INVALID_TOKEN':
          window.localStorage.removeItem('token')
          console.warn('Token removed')
          break
        case 'INTERNAL_SERVER_ERROR':
          // do something
          console.error('Error', err)
          break

        // Apollo Server sets code to UNAUTHENTICATED
        // when an AuthenticationError is thrown in a resolver
        case 'UNAUTHENTICATED':
          // Modify the operation context with a new token
          // const oldHeaders = operation.getContext().headers;
          // operation.setContext({
          //   headers: {
          //     ...oldHeaders,
          //     authorization: getNewToken(),
          //   },
          // });
          // Retry the request, returning the new observable
          // return forward(operation);
          break
      }
    }
  }
  // To retry on network errors, we recommend the RetryLink
  // instead of the onError link. This just logs the error.
  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
  return forward(operation)
})

const authLink = setContext((_, { headers }) => {
  const newHeaders = {
    // credentials: 'include'
  }
  // get the authentication token from local storage if it exists
  const token = window.localStorage.getItem('token')
  if (token) { newHeaders.authorization = `Bearer ${token}` }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      ...newHeaders
    }
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(authLink.concat(httpLink))
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
)
