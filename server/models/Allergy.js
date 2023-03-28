const { Schema, model } = require("mongoose");
const User = require('./Customer')

const allergySchema = new Schema ({
    _id: {
        type:String
    },
    allergyDescription:{
        type: String
    }
})

const Allergy = model('Allergy', allergySchema);

module.exports = Allergy;