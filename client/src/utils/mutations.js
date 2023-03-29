import { gql } from '@apollo/client';

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

export const ADD_CUSTOMER = gql`
mutation addCustomer($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addCustomer(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    Customer {
        _id firstName lastName email password
    }
    }
}
`;