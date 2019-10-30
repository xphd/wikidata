// create a chain of promise, each of which sends a request to wikidata to search the item

const search = require("./search.js");
function startSearch(stores) {
  let items = stores.items;
  let chain = Promise.resolve();
  items.forEach(name => {
    chain = chain.then(() => {
      return new Promise((fullfill, reject) => {
        search(stores, name, fullfill, reject);
      });
    });
  });
  return chain;
}
module.exports = startSearch;
