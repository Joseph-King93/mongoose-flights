const mongoose = require('mongoose');

const Schema = mongoose.Schema;
	
let brandNewDate = doStuff()
function doStuff() {
    const addDateYear = new Date() 
    addDateYear.setFullYear(addDateYear.getFullYear() + 1)
      return addDateYear
}

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }
});

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999
  },
  departs: {
    type: Date,
    default: brandNewDate
    },
    destinations: [destinationSchema]
}, {
    timestamps: true 
});

module.exports = mongoose.model('Flight', flightSchema);
