const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User { 
        id: String
        userName: String
        birthDay: String
        firstName: String
        lastName: String
        email: String
        gender: String
        phoneNumber: String
        bloodType: String
        dnr: Boolean
        drugallergies: [String]
        foodallergies: [String]
        contactName: String
        relationship: String
        contactPhoneNumber: String
    }

    type Auth {
        token: ID!
        User: User
    }

    type Query {
        Users [User]!
        User(User: ID!): User
        me: User
        
    }

    type Mutation {
        Users: [User]!
        User(UserId: ID!): User
        me: User
    }

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth 
    login(email: String!, password: String!): Auth

    updateFirstName(userId: ID!, firstName: String!): User
    updateLastName(userId: ID!, lastName: String!): User
    updateEmail(userId: ID!, email: String!): User
    updatePhoneNumber(userId: ID!, phoneNumber: String!): User
    updateEmail(userId: ID!, email: String!): User
    updateDnr(userId: ID!, dnr: String!): User
    updateDrugallergies(userId: ID!, drugallergies: String!): User
    updateFoodallergies(userId: ID!, foodallergies: String!): User
    updateContactName(userId: ID!, contactName: String!): User
    updateRelationship(userId: ID!, relationship: String!): User
    updateContactPhoneNumber(userId: ID!, updateContactPhoneNumber: String!): User
}
