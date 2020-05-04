'use strict'

const Fund = use('App/Models/Fund')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with funds
 */
class FundController {
    /**
     * Show a list of all funds.
     * GET funds
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        const funds = await Fund.all()

        return funds
    }

    /**
     * Create/save a new fund.
     * POST funds
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        const newFund = request.only(['name', 'quote', 'date', 'CNPJ'])
        const fund = await Fund.create(newFund)

        return fund
    }

    /**
     * Display a single fund.
     * GET funds/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
        const { id } = params

        const fund = await Fund.find(id)

        return fund
    }

    /**
     * Update fund details.
     * PUT or PATCH funds/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const { id } = params

        const newFund = request.only(['quote', 'date'])
        const fund = await Fund.find(id)

        fund.merge(newFund)

        await fund.save()

        return fund
    }

    /**
     * Delete a fund with id.
     * DELETE funds/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const { id } = params

        const fund = await Fund.find(id)

        await fund.delete()
    }
}

module.exports = FundController
