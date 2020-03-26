const connection = require('../database/connection')//para op com bd
const crypto  = require('crypto')

module.exports = {
  //List ONGS
  async index (req, res){
    const ongs = await connection('ongs').select('*')
  
    return res.json(ongs)
  },
  //Create new ONG
  async create(req, res){
    const {name, email, whatsapp, city, uf } = req.body;
    const id = crypto.randomBytes(4).toString('HEX');  

    await connection('ongs').insert({
      id,
      name, 
      email,
      whatsapp,
      city,
      uf,
    })
    return res.json({id})
  }
}