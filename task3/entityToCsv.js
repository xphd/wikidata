const entityToObjs = require("./entityToObjs.js")
const objsToCsv = require("./objsToCsv.js")

function entityToCsv(stores){
    let objs = entityToObjs(stores)
    objsToCsv(objs)
}

module.exports = entityToCsv


