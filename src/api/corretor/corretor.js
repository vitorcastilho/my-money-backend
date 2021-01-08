const restful = require('node-restful')
const mongoose = restful.mongoose

const comentarioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    cidade: {type: String, required: true},
    opiniao: {type: String, min:2, max:200, required: true}
})

const corretorSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    aneps: {type: String, required: true},
    telefone: {type: String, required: true},
    email: {type: String, required: true},
    avatar: {type: String, required: true},
    historia: {type: String, required: true},
    comentarios: [comentarioSchema]
})

module.exports = restful.model('Corretor', corretorSchema)