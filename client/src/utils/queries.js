import { gql } from '@apollo/client';

export const RETURN_ALL_CUSTOMERS = gql`
  query Customers {
    customers {
      firstName
      lastName
      birthdate
      gender
      phoneNumber
      bloodType
      doNotIntubate
      doNotResuscitate
      Allergy {
        allergyDescription
      }
      EmergencyContact {
        firstName
        lastName
        phoneNumber
      }
    }
  }
`;