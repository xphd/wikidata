function entityToObjs(stores) {
  let map_id_to_entity = stores.map_id_to_entity;
  let map_propertyId_to_entityIds = stores.map_propertyId_to_entityIds;
  // note: property_values can be null
  let objs = [];
  for (let [id, entity] of map_id_to_entity.entries()) {
    let obj = {};
    // let id = entity["id"];
    let label = entity["label"];
    obj["id"] = id;
    obj["label"] = label;
    let claims = entity["claims"];

    for (let claim of Object.values(claims)) {
      let property_id = claim["id"];

      let raw_values = claim["values"];

      // console.log(property_id, raw_values);

      let datatype = raw_values[0]["datatype"];
      let values = [];

      if (datatype == "wikibase-item") {
        let map = map_propertyId_to_entityIds; // shortcut
        let set = null;
        if (map.has(property_id)) {
          set = map.get(property_id);
        } else {
          set = new Set();
          map.set(property_id, set);
        }

        raw_values.forEach(raw_value => {
          let v = raw_value["value"];
          values.push(v);
          set.add(v);
        });
        obj[property_id] = values;
      } //else if (datatype == "quantity") {}
    }
    objs.push(obj);
  }
  return objs;
}
module.exports = entityToObjs;
