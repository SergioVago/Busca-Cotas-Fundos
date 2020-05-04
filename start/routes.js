'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.resource('funds', 'FundController').apiOnly()
Route.get('funds/aux/cnpj/:cnpj', 'AuxFundsController.show')
Route.get('funds/aux/updateAll/', 'AuxFundsController.updateAll')
