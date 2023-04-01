import { gql } from "@apollo/client";

export const RETURN_ALL_CUSTOMERS = gql`
  query Customers {
    customers {
      _id
      firstName
      lastName
      birthdate
      gender
      email
      phoneNumber
      bloodType
      doNotIntubate
      doNotResuscitate
      # Allergy {
      #   allergyDescription
      # }
      # EmergencyContact {
      #   firstName
      #   lastName
      #   phoneNumber
      # }
    }
  }
`;

export const RETURN_ONE_CUSTOMER = gql`
query Me {
    me {
      firstName
      lastName
      gender
      username
      phoneNumber
      email
      doNotResuscitate
      doNotIntubate
      bloodType
      birthdate
      EmergencyContact {
        firstName
        lastName
        phoneNumber
      }
      Allergy {
        allergyDescription
      }
    }
  }
`
