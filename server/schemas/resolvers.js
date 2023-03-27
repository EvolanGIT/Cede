const { AuthenticationError } = require('apollo-server-express');
//const { User } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');


const resolvers = {
    Query: {
        Users: async () => {
            return User.find();
        },
    
        User: async (parent, { UserId }) => {
            return User.findOne({ _id: UserId });
        },
        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        me: async (parent, args, context) => {
            if (context.user) {
            return User.findOne({ _id: context.user._id });
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

        firstName: async (parent, { userId, firstName }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { id: userId },
                    {
                    $set: { firstName: firstName }, //check with tutor
                    },
                    {
                    new: true,
                    runValidators: true,
                    }
                );
                }
                throw new AuthenticationError('You need to be logged in!');
            },
            
        lastName: async (parent, { userId, lastName }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { lastNames: lastName },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        email: async (parent, { userId, email }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { email: email },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        gender: async (parent, { userId, gender }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { gender: gender },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        phoneNumber: async (parent, { userId,phoneNumber }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: {phoneNumber: phoneNumber },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        bloodType: async (parent, { userId, bloodType }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { bloodType: bloodType },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        gender: async (parent, { userId, gender }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { gender: gender },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        
        phoneNumber: async (parent, { userId, phoneNumber }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { phoneNumber: phoneNumber },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        bloodType: async (parent, { userId, bloodType }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { bloodType: bloodType },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        dnr: async (parent, { userId, dnr }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { dnr: dnr },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        drugallergies: async (parent, { userId, drugallergies }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { drugallergies: drugallergies },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        foodallergies: async (parent, { userId, foodallergies }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { foodallergies: foodallergies },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        contactName: async (parent, { userId, contactName }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { contactName: contactName },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
            
        relationship: async (parent, { userId, relationship }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { relationship: relationship },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        contactPhoneNumber: async (parent, { userId, contactPhoneNumber }, context) => {
            if (context.user) {
            return User.findOneAndUpdate(
                { id: userId },
                {
                $set: { contactPhoneNumber: contactPhoneNumber },
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
}

        





          


