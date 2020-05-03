'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.resource('funds', 'FundController').apiOnly()
Route.get('funds/cnpj/:cnpj', 'CnpjController.show')
