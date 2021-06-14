import { useQuery, useMutation, gql } from '@apollo/client'

export const useVehicles = () => {
  return useQuery(gql`
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
  `)
}

export const useVehicle = id => {
  return useQuery(gql`
  query GetVehicle {
    vehicle(where: { id: "${id}" }) {
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
`)
}

export const useOrderVehicle = () => {
  return useMutation(gql`
    mutation CreateOrder(
      $customerName: String!
      $customerEmail: String!
      $vehicle: VehicleCreateOneInlineInput
    ) {
      createOrder(
        data: {
          customerName: $customerName
          customerEmail: $customerEmail
          vehicle: $vehicle
        }
      ) {
        id
      }
    }
  `)
}
