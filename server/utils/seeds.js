const connection = require('../config/connection')
const {Allergy, Login, EmergencyContact, Customer} = require('../models')

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  
  //Allergies
  await Allergy.deleteMany({});
  
  const allergies = await Allergy.insertMany([
    { _id: 001,
      allergyDescription: 'Latex'
    },
    { _id: 002,
      allergyDescription: 'Penicilin'
    },
    { _id: 003,
      allergyDescription: 'sulfonamides'
    },
    { _id: 004,
      allergyDescription: 'Anticonvulsants'
    },
    { _id: 005,
      allergyDescription: 'Aspirin'
    },
    { _id: 006,
      allergyDescription: 'NSAIDs'
    },
  ]);
  console.log('allergies seeded');

  //emergency contacts
  await EmergencyContact.deleteMany({});

  const contact = await EmergencyContact.insertMany([
      {_id: 001,
        firstName: "John",
        lastName: "Wick",
        phoneNumber: '555-555-5555',
        relationship: "Father"
      },
      {_id: 002,
        firstName: "Bruce",
        lastName: "Wayne",
        phoneNumber: '111-111-1111',
        relationship: "Custodian"
      },
      {_id: 003,
        firstName: "Clark",
        lastName: "Kent",
        phoneNumber: '222-222-2222',
        relationship: "Uncle"
      },
      {_id: 004,
        firstName: "Diana",
        lastName: "of Temizscira",
        phoneNumber: '333-333-3333',
        relationship: "Wife"
      },
      {_id: 005,
        firstName: "Uncle",
        lastName: "Dijon",
        phoneNumber: '444-444-4444',
        relationship: "Brother"
      },
  ]);
  console.log('Emergency Contacts seeded');

  // customers
  await Customer.deleteMany({});
  
  await Customer.create([
      {
        username: "user1",
        firstName: "Yon",
        lastName: "Bermudez",
        birthdate: "<1986-03-02>",
        email: "test@mail.com",
        gender: "Male",
        phoneNumber: "258-365-7856",
        bloodType: "O-",
        DNR: true,
        DNI: false,
        EmergencyContact: [ contact[0]._id,contact[2]._id],
        Allergy: [allergies[2]._id,allergies[0]._id]
      },
  ]);
  
  await Customer.create([
    {
      username: "user2",
      firstName: "Edwin",
      lastName: "Pietrowski",
      birthdate: "<1984-05-27>",
      email: "test2@mail.com",
      gender: "Male",
      phoneNumber: "471-587-3594",
      bloodType: "O+",
      DNR: false,
      DNI: false,
      EmergencyContact: [ contact[1]._id,contact[4]._id],
      Allergy: [allergies[3]._id,allergies[1]._id]
    },
  ]);
  console.log("Users Seeded");
  
  await Login.deleteMany({});
  await Provider.deleteMany({});
  //start adding from json
  await Customer.collection.insertMany(customers)
  await Login.collection.insertMany(logins)
  await Provider.collection.insertMany(emergencyContacts)
  await Provider.collection.insertMany(providers)
  process.exit(0);
})




