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
        "Bridal Suite: Private room for bride.",
        "Ceremony Area: Indoor/outdoor ceremony space.",
        "Reception Hall: Hall with dance floor.",
        "Catering: On-site customizable catering.",
        "Decorations: Floral and themed decor.",
        "Audio-Visual: Sound system and projector.",
        "Event Coordination: On-site planners and coordinators.",
      ],
    },
    description: {
      type: String,
      required: true,
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