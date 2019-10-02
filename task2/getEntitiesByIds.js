import { getEntities } from 'wiki-entity';

function getEntitiesByIds(stores){
  let ids = ["Q172241", "Q47703", "Q202326", "Q2695156", "Q104123"];
  getEntities({ language: 'en', ids }).then(entities => {
    entities.forEach(entity=>{
        console.log(entity)
    })
    
 
});
}
module.exports = getEntitiesByIds

// function getEntities(stores) {
//   // let map_items_to_ids = stores.map_items_to_ids;
//   //   let ids = stores.map;
//   let ids = ["Q172241", "Q47703", "Q202326", "Q2695156", "Q104123"];
//   let chain = Promise.resolve();

//   //   for (let [item, id] of map_items_to_ids.entries()) {
//   ids.forEach(id => {
//     // console.log(key, value);
//     chain = chain.then(() => {
//       return new Promise((fullfill, reject) => {
//         getEntity(stores, id, fullfill, reject);
//       });
//     });
//   });
// }
// module.exports = getEntities;
