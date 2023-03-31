import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      Customer {
        _id
      }
    }
  }
`;

export const ADD_CUSTOMER_NEW = gql`
  mutation AddCustomer(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $gender: String!
    $phoneNumber: String!
    $bloodType: String!
    $doNotResuscitate: Boolean!
    $doNotIntubate: Boolean!
    $birthdate: String
  ) {
    addCustomer(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      gender: $gender
      phoneNumber: $phoneNumber
      bloodType: $bloodType
      doNotResuscitate: $doNotResuscitate
      doNotIntubate: $doNotIntubate
      birthdate: $birthdate
    ) {
      token
    }
  }
`;


