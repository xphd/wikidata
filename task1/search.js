const rp = require("request-promise");

let apiHost = "www.wikidata.org";
let apiPath = "/w/api.php";

let searchAction = "wbsearchentities";
let language = "en";
let limit = 7;
let type = "item";
let combinedUri = "https://" + apiHost + apiPath;
combinedUri = combinedUri + "?action=" + searchAction;
combinedUri = combinedUri + "&language=" + language;
combinedUri = combinedUri + "&type=" + type;
combinedUri = combinedUri + "&limit=" + limit;
combinedUri = combinedUri + "&format=json"; //we always want JSON back...

function search(stores, item, fullfill, reject) {
  let map = stores.map_item_to_id;
  combinedUri = combinedUri + "&search=" + encodeURIComponent(item);

  let requestOptions = {
    uri: combinedUri,
    method: "GET",
    json: true
  };

  rp(requestOptions)
    .then(function(response) {
      let id = response["search"][0]["id"];
      console.log(id);
      map.set(item, id);
      fullfill();
    })
    .catch(function(err) {
      // API call failed...
      reject(err);
    });
}

module.exports = search;
