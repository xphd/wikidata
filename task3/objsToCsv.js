const ObjectsToCsv = require("objects-to-csv");

function objectsToCsv(objs) {
  const csv = new ObjectsToCsv(objs);
  // console.log(objs[0])
  csv.toDisk("./entities.csv");
}
module.exports = objectsToCsv;
