

'use strict'
///////////////////////////////////////////////////////////////////
////////////             Strategic Machines          /////////////
///////////         machine constructor    c2017    //////////////
/////////////////////////////////////////////////////////////////

const {db}      = require('../db')

exports.setMessage = (resp) => {
  let newObj = {}
  newObj.message = resp

  db()
  .then(() => {
    d.updateWorkObj(newObj)           // object with message data appended to workobject
    return
  })

}