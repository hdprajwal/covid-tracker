const db = require('./src/config/db');
const { Covid } = require('./src/models');
const data = require('./data/raw_data1.json');
const data2 = require('./data/raw_data2.json');

db.connect.then(() => {
  data.map((each) => {
    Covid.create({
      patientNo: each['Patient No'],
      state: each['Detected State'],
      stateCode: each['State Code'],
      gender: each.Gender,
      age: each['Age Bracket'],
      status: each['Current Status'],
      date: each['Date Announced'],
      numCase: each['Num Cases'],
    });
    return 0;
  });
  data2.map((each) => {
    Covid.create({
      patientNo: each['Patient No'],
      state: each['Detected State'],
      stateCode: each['State Code'],
      gender: each.Gender,
      age: each['Age Bracket'],
      status: each['Current Status'],
      date: each['Date Announced'],
      numCase: each['Num Cases'],
    });
    return 0;
  });
});
