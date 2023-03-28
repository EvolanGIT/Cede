const { Schema, model } = require("mongoose");

const allergySchema = new Schema ({
    allergyDescription:{
        type: String
    }
})

const Allergy = model('Allergy', allergySchema);

module.exports = Allergy;