import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cknoq6cg8n99i01z38l7l22oe/master',
  cache: new InMemoryCache(),
})

const ALL_VEHICLES = gql`
  query GetAllVehicles {
    vehicles {
      id
      mileage
      year
      name
      price
      vin
      description
      image {
        url
        fileName
      }
    }
  }
`

const VehicleOverview = () => {
  const { loading, error, data } = useQuery(ALL_VEHICLES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)

  return data.vehicles.map(vehicle => (
    <div key={vehicle.id}>
      <p>audo: {vehicle.name}</p>
      <p>audo: {vehicle.description}</p>
      <img src={vehicle.image.url} />
    </div>
  ))
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <VehicleOverview />
  </ApolloProvider>,
  document.getElementById('root')
)
