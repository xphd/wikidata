const fs = require('fs')
const csvjson = require("csvjson")

const stores = {
  items: null,
  map_item_to_id: new Map(), // results from task 1
  map_id_to_entity: new Map(), // results from task 2
  map_propertyId_to_entityIds: new Map() // results from task 3
};

// let map_name_to_object = new Map(); // map name shown in colum to object returned by "wikidata serach"
// let map_id_to_entity = new Map(); // map id (begin with "Q") to entity (item wikidata)
// let map_property_count = new Map();

// read csv file, get a list of name/item for wiki-search

// let isDev = false
let isDev = true

let items = ["The Dark Knight", "Pulp Fiction"];

// get names for search from the csv file
if (!isDev) {
  const csvFilePath = "imdb_10.csv";
  let col_selected = "title";
  let data = fs.readFileSync(csvFilePath, { encoding: 'utf8' })
  let options = {
    delimiter: ',', // optional
    quote: '"' // optional
  };
  let objs = csvjson.toObject(data, options);
  objs.forEach(obj => {
    let col_name = obj[col_selected]
    items.push(col_name)
  })
}

stores.items = items;

// console.log(stores.items)

// search
const task1 = require("./task1");
const task2 = require("./task2");
const task3 = require("./task3");
const task4 = require("./task4")

go();

async function go() {
  console.log("Task 1 begin");
  await task1.startSearch(stores);
  console.log("Task 1 end");

  console.log("Task 2 begin");
  await task2.getEntitiesByIds(stores);
  console.log("Task 2 end");

  console.log("Task 3 begin");
  task3.entityToCsv(stores);
  console.log("Task 3 end");

  // console.log(stores.map_propertyId_to_entityIds);

  // console.log("Task 4 begin");
  // task4.expand(stores)
  // console.log("Task 4 end");
}

// grab all infor from wikidata about each item, if
