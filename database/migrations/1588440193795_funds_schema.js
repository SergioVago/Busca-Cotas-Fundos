'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FundsSchema extends Schema {
    up() {
        this.create('funds', (table) => {
            table.increments()
            table.string('name').notNullable()
            table.date('date').notNullable()
            table.string('quote').notNullable()
            table.bigInteger('CNPJ').notNullable().unique()
            table.timestamps()
        })
    }

    down() {
        this.drop('funds')
    }
}

module.exports = FundsSchema
