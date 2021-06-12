import { useQuery, gql } from '@apollo/client'

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

export default VehicleOverview
