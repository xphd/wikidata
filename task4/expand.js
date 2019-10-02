const ObjectsToCsv = require("objects-to-csv");
import { getEntities } from "wiki-entity";

function expand(stores) {
  let map = stores.map_propertyId_to_entityIds;
  for (let [propertyId, entityIdsSet] of map.entries()) {
    let entityIds = Array.from(entityIdsSet);
    getEntities({ language: "en", ids: entityIds }).then(entities => {
      let objs = [];
      entities.forEach(entity => {
        let obj = entityToObj(entity);
        objs.push(obj);
      });
      const csv = new ObjectsToCsv(objs);
      csv.toDisk("./properties/" + propertyId + ".csv");
    });
  }

  //   let propertyId = "P674";
  //     let entityIds = ["Q15427568", "Q16585660", "Q19777775", "Q3900376"];

  //   getEntities({ language: "en", ids: entityIds }).then(entities => {
  //     let objs = [];
  //     entities.forEach(entity => {
  //       let obj = entityToObj(entity);
  //       objs.push(obj);
  //     });
  //     const csv = new ObjectsToCsv(objs);
  //     csv.toDisk("./properties/" + propertyId + ".csv");
  //   });
}

function entityToObj(entity) {
  let obj = {};
  let id = entity["id"];
  let label = entity["label"];
  obj["id"] = id;
  obj["label"] = label;
  let claims = entity["claims"];
  for (let claim of Object.values(claims)) {
    let property_id = claim["id"];
    let raw_values = claim["values"];
    let datatype = raw_values[0]["datatype"];
    let values = [];
    if (datatype == "wikibase-item") {
      raw_values.forEach(raw_value => {
        let v = raw_value["value"];
        values.push(v);
      });
      obj[property_id] = values;
    } //else if (datatype == "quantity") {}
  }
  return obj;
}
module.exports = expand;
