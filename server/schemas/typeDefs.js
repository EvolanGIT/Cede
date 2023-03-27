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
        User(User)
    }

