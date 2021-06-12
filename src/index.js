import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Router from './Router'
import './index.css'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cknoq6cg8n99i01z38l7l22oe/master',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>,
  document.getElementById('root')
)
