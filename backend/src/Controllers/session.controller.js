const connection = require('../database/connection')//para op com bd

module.exports = {
  async create(req, res){
    const { id } = req.body;

    const ong = await connection('ongs').where('id', id).select('name').first();

    if(!ong){
      return res.status(400).json({error:"Não existe ONG com esse ID"})
    }

    return res.json(ong);
  }
}