const connection = require('../database/connection')//para op com bd

module.exports = {
  async index(req, res){
    const ong_id = req.headers.authorization;

    console.log(ong_id)
    const caso = await connection('casos').where('ong_id', ong_id).select('*');

    return res.json(caso)
  }
}