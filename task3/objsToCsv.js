const ObjectsToCsv = require("objects-to-csv");

function objectsToCsv(objs) {
  // const csv = new ObjectsToCsv(objs);  
  // csv.toDisk("./entities.csv");

  let counted_objs = []
  objs.forEach(obj => {
    let counted_obj = {}
    for (let [key, value] of Object.entries(obj)) {

      if (Array.isArray(value)) {
        let len = value.length
        // console.log("count_"+key,value.length)
        if (len > 1) {
          let counted_key = "count_" + key
          counted_obj[counted_key] = len
        } else if (len == 1) {
          counted_obj[key] = value[0]
        } else {

        }
      } else {
        counted_obj[key] = value
      }
    }
    counted_objs.push(counted_obj)
  })

  const csv = new ObjectsToCsv(counted_objs);
  csv.toDisk("./entities.csv");
}
module.exports = objectsToCsv;
