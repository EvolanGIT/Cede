const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
    Query: {
        Users: async () => {
            return User.find();
        },
    
        User: async (parent, { User }) => {
            return User.findOne({ id });
        },

        me: async (parent, args, context) => {
            if (context.user) {
            return User.findOne({ id: context.user.id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { name, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            const token = signToken(user);
        
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
    
            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }
    
            const correctPw = await User.isCorrectPassword(password);
    
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
    
            const token = signToken(user);
            return { token, user };
        },

        updateFirstName: async (parent, { userId, firstName }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { id: userId },
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
            
        updateLastName: async (parent, { userId, lastName }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { lastNames },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        updateEmail: async (parent, { userId, email }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
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


        updatePhoneNumber: async (parent, { userId, phoneNumber }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
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
        
        updatePhoneNumber: async (parent, { userId, phoneNumber }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
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

        updateDnr: async (parent, { userId, dnr }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
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

        updateDrugallergies: async (parent, { userId, drugallergies }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
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

        updateFoodallergies: async (parent, { userId, foodallergies }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
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

        updateContactName: async (parent, { userId, contactName }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
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
            
        updateRelationship: async (parent, { userId, relationship }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
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

        updateContactPhoneNumber: async (parent, { userId, contactPhoneNumber }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
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

        





          


