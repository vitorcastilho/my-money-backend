const Corretor = require('./corretor')
const errorHandler = require('../common/errorHandler')

Corretor.methods(['get', 'post', 'put', 'delete'])
Corretor.updateOptions({ new: true, runValidators: true })
Corretor.after('post', errorHandler).after('put', errorHandler)

module.exports = Corretor 
