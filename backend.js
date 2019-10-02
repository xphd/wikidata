const fs = require("fs");
const csvjson = require("csvjson");

const stores = {
    items:null,
  map_items_to_ids: new Map()
};

// let map_name_to_object = new Map(); // map name shown in colum to object returned by "wikidata serach"
// let map_id_to_entity = new Map(); // map id (begin with "Q") to entity (item wikidata)
// let map_property_count = new Map();

// read csv file, get a list of name/item for wiki-search

// const csvFilePath = "imdb_10.csv";
// let col_selected = "title";

// get names for search from the csv file
// let items = ["The Godfather", "Pulp Fiction"];
// let items = []

// let data = fs.readFileSync(csvFilePath, { encoding: 'utf8' })
// let options = {
//     delimiter: ',', // optional
//     quote: '"' // optional
// };
// let objs = csvjson.toObject(data, options);
// objs.forEach(obj => {
//     let col_name = obj[col_selected]
//     items.push(col_name)
// })

// stores.items = items

// console.log(stores.items)

// search
const task1 = require("./task1");
const task2 = require("./task2")

go()

async function go() {
  // console.log("Task 1 begin");
  // await task1.startSearch(stores);
  // console.log("Task 1 end");

  console.log("Task 2 begin");
  await task2.getEntitiesById(stores);
  console.log("Task 2 end");
}



// grab all infor from wikidata about each item, if
