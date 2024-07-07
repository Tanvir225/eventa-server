const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema(
  {
    vendor_name: {
      type: String,
      required: true,
    },
    vendor_email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    hall_image: {
      type: String,
      required: true,
    },
    live_location: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    hall_cost: {
      type: Number,
      required: true,
    },
    facalities: {
      type: String,
      types: [
        {label:'Bridal Suite',value:'Private room for bride.'},
        {label:'Ceremony Area',value:'Indoor/outdoor ceremony space.'},
        {label:'Catering',value:'On-site customizable catering.'},
        {label:'Decorations',value:'Floral and themed decor.'},
        {label:'Audio-Visual',value:'Sound system and projector.'},
        {label:'Event Coordination',value:'On-site planners and coordinators.'}
      ],
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,   
    },
    terms_condition: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);


module.exports = hallSchema