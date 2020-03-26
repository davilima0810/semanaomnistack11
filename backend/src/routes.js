const express = require('express')
const Ongcontroller = require('./Controllers/ong.controller')
const Casoscontroller = require('./Controllers/casos.controller')
const CasosOngcontroller = require('./Controllers/casosOng.controller')
const sessioncontroller = require('./Controllers/session.controller')


const routes = express.Router()
//Iniciar Seção
routes.post('/session', sessioncontroller.create)

//List ONGS
routes.get('/ongs',Ongcontroller.index)

//Create new ONG
routes.post('/ongs',Ongcontroller.create)

//Listar casos de uma só ONG
routes.get('/profile', CasosOngcontroller.index)

//List Casos
routes.get('/casos', Casoscontroller.index)
//Create new incidents
routes.post('/casos', Casoscontroller.create)
//Deletar casos
routes.delete('/casos/:id',Casoscontroller.delete)



module.exports = routes