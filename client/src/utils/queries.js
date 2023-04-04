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
  query customer($customerId: ID!) {
    customer(customerId: $customerId) {
      _id
      firstName
      lastName
      gender
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
`;

export const RETURN_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      gender
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
`;
