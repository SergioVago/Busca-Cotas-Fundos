'use strict'

const Fund = use('App/Models/Fund')
const axios = use('axios')
const dateFns = use('date-fns')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

class AuxFundsController {
    reverseStr(str) {
        return str.split("").reverse().join("")
    }

    toDate(date) {
        return date.split("/").reverse().join("-")
    }


    async atualizaFundo(id) {
        console.log(`buscando id = ${id}... `);

        const { data } = await axios.get(`https://servicosfinanceiros.bnymellon.com/AppPages/investimentfunds/fund.aspx?iditem=${id}`)

        var dateResult = data.search("ContentPlaceHolder_lblDateValue")
        var date = data.substring(dateResult + 33, dateResult + 43)
        date = this.toDate(date)
        console.log('date :>> ', date);

        var quoteResult = data.search("ContentPlaceHolder_lblQuoteValue")
        var quoteString = data.substring(quoteResult)
        var quoteStart = quoteString.search(">")
        var quoteEnd = quoteString.search("<")
        var quote = quoteString.substring(quoteStart + 1, quoteEnd)
        console.log('quote :>> ', quote);

        //24018977000102
        var cnpjResult = data.search(".pdf")
        var cnpjString = data.substring(cnpjResult - 100, cnpjResult)
        cnpjString = this.reverseStr(cnpjString)

        var cnpjStart = cnpjString.search(">")
        var cnpjEnd = cnpjStart - 14
        var cnpj = cnpjString.substring(cnpjEnd, cnpjStart)
        cnpj = this.reverseStr(cnpj)
        console.log('cnpj :>> ', cnpj);

        const fund = {
            date,
            quote,
            CNPJ: cnpj
        }
        const dbFund = await Fund.findBy('CNPJ', cnpj)
        dbFund.merge(fund)
        await dbFund.save()

        return dbFund
    }

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

    async updateAll({ request, response }) {
        console.log("Buscando fundos ...")
        const funds = []

        const validsIds = [3308, 3307, 3306, 3305, 3299, 3298, 3297, 3296, 3295]

        for (let id of validsIds)
            funds.push(await this.atualizaFundo(id))

        return funds
    }

}

module.exports = AuxFundsController
