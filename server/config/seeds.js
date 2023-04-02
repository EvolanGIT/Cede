const connection = require("./connection");
const { Allergy, Login, EmergencyContact, Customer } = require("../models");
const mongoose = require("mongoose");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  //Allergies
  await Allergy.deleteMany({});
  await EmergencyContact.deleteMany({});
  await Customer.deleteMany({});
  await Login.deleteMany({});

  const allergies = await Allergy.insertMany([
    { _id: "a001", allergyDescription: "Latex" },
    { _id: "a002", allergyDescription: "Penicilin" },
    { _id: "a003", allergyDescription: "sulfonamides" },
    { _id: "a004", allergyDescription: "Anticonvulsants" },
    { _id: "a005", allergyDescription: "Aspirin" },
    { _id: "a006", allergyDescription: "NSAIDs" },
  ]);
  console.log("allergies seeded");

  const contacts = await EmergencyContact.insertMany([
    {
      _id: "e001",
      firstName: "John",
      lastName: "Wick",
      phoneNumber: "555-555-5555",
      relationship: "Father",
    },
    {
      _id: "e002",
      firstName: "Bruce",
      lastName: "Wayne",
      phoneNumber: "111-111-1111",
      relationship: "Custodian",
    },
    {
      _id: "e003",
      firstName: "Clark",
      lastName: "Kent",
      phoneNumber: "222-222-2222",
      relationship: "Uncle",
    },
    {
      _id: "e004",
      firstName: "Diana",
      lastName: "of Temizscira",
      phoneNumber: "333-333-3333",
      relationship: "Wife",
    },
    {
      _id: "e005",
      firstName: "Uncle",
      lastName: "Dijon",
      phoneNumber: "444-444-4444",
      relationship: "Brother",
    },
  ]);
  console.log("Emergency Contacts seeded");

  // customers
  await Customer.deleteMany({});

  await Customer.create([
    {
     
      firstName: "Yon",
      lastName: "Bermudez",
      birthdate: "<1986-03-02>",
      email: "test@mail.com",
      password: "Password123",
      gender: "Male",
      phoneNumber: "258-365-7856",
      bloodType: "O-",
      DNR: true,
      DNI: false,
      EmergencyContact: contacts.filter(({ _id }) => {
        return _id === "e001" || _id === "e002";
      }),
      Allergy: allergies.filter(({ _id }) => {
        return _id === "a001" || _id === "a002";
      }),
    },
  ]);

  await Customer.create([
    {
     
      firstName: "Edwin",
      lastName: "Pietrowski",
      birthdate: "<1984-05-27>",
      email: "test2@mail.com",
      password: "Password123",
      gender: "Male",
      phoneNumber: "471-587-3594",
      bloodType: "O+",
      DNR: false,
      DNI: false,
      EmergencyContact: contacts.filter(({ _id }) => {
        return _id === "e003";
      }),
      Allergy: allergies.filter(({ _id }) => {
        return _id === "a005";
      }),
    },
  ]);

  await Customer.create([
    {
      
      firstName: "Alberto",
      lastName: "De Armas",
      birthdate: "<1989-11-13>",
      email: "test3@mail.com",
      password: "Password123",
      gender: "Male",
      phoneNumber: "980-939-2587",
      bloodType: "O+",
      DNR: false,
      DNI: false,
      EmergencyContact: contacts.filter(({ _id }) => {
        return _id === "e004";
      }),
      Allergy: [],
    },
  ]);

  console.log("Customers Seeded");
  process.exit(0);
});
