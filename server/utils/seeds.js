const connection = require('../config/connection')
const {Allergy, Login, EmergencyContact} = require('../models')

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Allergy.deleteMany({});
  await EmergencyContact.deleteMany({});
  await Customer.deleteMany({});
  await Login.deleteMany({});
  await Provider.deleteMany({});
  //start adding from json
  await Customer.collection.insertMany(customers)
  await Login.collection.insertMany(logins)
  await Provider.collection.insertMany(emergencyContacts)
  await Provider.collection.insertMany(providers)
  process.exit(0);
})
