import React from 'react'
import Router from './Router'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cknoq6cg8n99i01z38l7l22oe/master',
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  )
}

export default App
