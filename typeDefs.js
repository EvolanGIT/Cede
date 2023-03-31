const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Customer {
_id: ID
username: String
birthdate: String
firstName: String
lastName: String
email: String
password: String
gender: String
phoneNumber: String
bloodType: String
doNotIntubate: Boolean
doNotResuscitate: Boolean
Allergy: [Allergy]
EmergencyContact: [EmergencyContact]
}

type Provider {
_id: ID
providerName: String
login: [Login]
}

type Login {
_id: ID
username: String
password: String
loginType: String
}

type Allergy {
_id: ID
allergyDescription: String
}

type EmergencyContact {
_id: ID
firstName: String
lastName: String
phoneNumber: String
}

type Auth {
token: ID!
Customer: Customer
}

type Query {
Customer(customer: ID!): Customer
customers: [Customer]!
me: Customer
}

type Mutation {

addCustomer(
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    birthdate: String
    gender: String!
    phoneNumber: String!
    bloodType: String!
    doNotResuscitate: Boolean!
    doNotIntubate: Boolean!
): Auth

login(email: String!, password: String!): Auth

updateFirstName(customerId: ID!, firstName: String!): Customer
updateLastName(customerId: ID!, lastName: String!): Customer
updateEmail(customerId: ID!, email: String!): Customer
updatePhoneNumber(customerId: ID!, phoneNumber: String!): Customer
updateDNR(customerId: ID!, DNR: String!): Customer
updateDNI(customerId: ID!, DNI: String!): Customer

updateAllergies(customerId: ID!, allergyDescription: String!): Allergy

updateContactFirstName(customerId: ID!, firstName: String!): EmergencyContact
updateContactLastName(customerId: ID!, lastName: String!): EmergencyContact
updateRelationship(customerId: ID!, relationship: String!): EmergencyContact
updateContactPhoneNumber(customerId: ID!, phoneNumber: String!): EmergencyContact
}
`;

module.exports= typeDefs;