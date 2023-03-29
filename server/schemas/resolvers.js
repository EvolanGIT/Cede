const { AuthenticationError } = require('apollo-server-express');
const { Customer} = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        
        Customer: async (parent, { Customer }) => {
            return Customer.findOne({ _id });
        },

        me: async (parent, args, context) => {
            if (context.user) {
            return Customer.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        // Provider: async () => {
        // }
        

    },

    Mutation: {
        addCustomer: async (parent, { name, email, password }) => {
            const customer = await Customer.create({ firstName, lastName, email, password });
            const token = signToken(customer);
        
            return { token, customer };
        },
        login: async (parent, { email, password }) => {
            const customer = await Customer.findOne({ email });
    
            if (!customer) {
                throw new AuthenticationError('No customer with this email found!');
            }
    
            const correctPw = await Customer.isCorrectPassword(password);
    
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
    
            const token = signToken(customer);
            return { token, customer };
        },

        updateFirstName: async (parent, { customerId, firstName }, context) => {
            if (context.user) {
                return Customer.findOneAndUpdate(
                    { _id: customerId },
                    {
                    $set: { firstName }, //check with tutor
                    },
                    {
                    new: true,
                    runValidators: true,
                    }
                );
                }
                throw new AuthenticationError('You need to be logged in!');
            },
            
        updateLastName: async (parent, { customerId, lastName }, context) => {
            if (context.user) {
            return Customer.findOneAndUpdate(
                { _id: customerId },
                {
                $set: { lastName },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        updateEmail: async (parent, { customerId, email }, context) => {
            if (context.user) {
            return Customer.findOneAndUpdate(
                { _id: customerId },
                {
                $set: { email },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },


        updatePhoneNumber: async (parent, { customerId, phoneNumber }, context) => {
            if (context.user) {
            return Customer.findOneAndUpdate(
                { _id: customerId },
                {
                $set: {phoneNumber },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        
        updatePhoneNumber: async (parent, { customerId, phoneNumber }, context) => {
            if (context.user) {
            return Customer.findOneAndUpdate(
                { _id: customerId },
                {
                $set: { phoneNumber },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        updateDnr: async (parent, { customerId, dnr }, context) => {
            if (context.user) {
            return Customer.findOneAndUpdate(
                { _id: customerId },
                {
                $set: { dnr },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        updateDrugallergies: async (parent, { customerId, drugallergies }, context) => {
            if (context.user) {
            return Customer.findOneAndUpdate(
                { _id: customerId },
                {
                $set: { drugallergies },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        updateFoodallergies: async (parent, { customerId, foodallergies }, context) => {
            if (context.user) {
            return Customer.findOneAndUpdate(
                { _id: customerId },
                {
                $set: { foodallergies },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        updateContactName: async (parent, { customerId, contactName }, context) => {
            if (context.user) {
            return Customer.findOneAndUpdate(
                { _id: customerId },
                {
                $set: { contactName },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
            
        updateRelationship: async (parent, { customerId, relationship }, context) => {
            if (context.user) {
            return Customer.findOneAndUpdate(
                { _id: customerId },
                {
                $set: { relationship },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        updateContactPhoneNumber: async (parent, { customerId, contactPhoneNumber }, context) => {
            if (context.user) {
            return Customer.findOneAndUpdate(
                { _id: customerId },
                {
                $set: { contactPhoneNumber },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    }
};

module.exports = resolvers;

        





          


