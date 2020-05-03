'use strict'

const Fund = use('App/Models/Fund')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

class CnpjController {
    /**
     * Display a single fund seraching by CNPJ.
     * GET funds/cnpj/:cnpj
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        const { cnpj } = params

        const fund = await Fund.findBy('CNPJ', cnpj)

        return fund
    }

}

module.exports = CnpjController
