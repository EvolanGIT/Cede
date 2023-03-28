const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Customer { 
        username: String
        birthdate: String
        firstName: String
        lastName: String
        email: String
        gender: String
        phoneNumber: String
        bloodType: String
        DNR: Boolean
        DNI: Boolean
        Allergy: [allergySchema]
        EmergencyContact: [emergencyContactSchema]
    }

    type Provider {
    providerName: String
    login: [loginSchema]
    }
    
    type Login {
        username: String
        password:String
        loginType: String
    }

    type Allergy {
    [allergyDescription]
    }

    type EmergencyContact {
        firstName: String
        lastName: String
        phoneNumber: String
    }

    type Auth {
        token: ID!
        User: User
    }

    type Query {
        User(User: ID!): User
        me: User
        
    }

    type Mutation {
        User(UserId: ID!): User
        me: User
    }

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth 
    login(email: String!, password: String!): Auth

    updateFirstName(userId: ID!, firstName: String!): Customer
    updateLastName(userId: ID!, lastName: String!): Customer
    updateEmail(userId: ID!, email: String!): Customer
    updatePhoneNumber(userId: ID!, phoneNumber: String!): Customer
    updateEmail(userId: ID!, email: String!): Customer
    updateDNR(userId: ID!, DNR: String!): Customer
    updateDNI(userId: ID!, DNI: String!): Customer

    updateAllergyDescription(userId: ID!, allergyDescription: String!): Allergy
    
    updateFirstName(userId: ID!, firstName: String!): EmergencyContact
    updateLastName(userId: ID!, lastName: String!): EmergencyContact
    updateRelationship(userId: ID!, relationship: String!): EmergencyContact
    updatePhoneNumber(userId: ID!, phoneNumber: String!): EmergencyContact
}
`;