const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const covidSchema = mongoose.Schema(
  {
    patientNo: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      lowercase: true,
    },
    stateCode: {
      type: String,
      default: 'NA',
    },
    gender: {
      type: String,
      defalut: 'na',
    },
    age: {
      type: String,
      default: 'na',
    },
    status: {
      type: String,
      default: 'na',
    },
    date: {
      type: String,
      default: '',
    },
    numCase: {
      type: Number,
      default:0,
    },
  },
  {
    timestamps: true,
  }
);

covidSchema.plugin(mongoosePaginate);
const Covid = mongoose.model('covid', covidSchema);

module.exports = Covid;
