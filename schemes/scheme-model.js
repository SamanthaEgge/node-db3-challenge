const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
}

function find() {
  return db('schemes')
}

function findById(id) {
  return db('schemes')
    .where({ id })
}

function findSteps(schemeid) {
  return db('schemes')
    .join('steps', 'steps.scheme_id', '=', 'schemes.id')
    .where({id: schemeid})
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number' , 'steps.instructions')
    // .where('st.scheme_id = id')
}

function add(scheme) {
  return db('schemes')
    .insert(scheme)
}

function update(changes, schemeid) {
  return db('schemes')
    .where({id: schemeid})
    .update(changes)
}

function remove(schemeid) {
  return db('schemes')
    .where({id: schemeid})
    .del()
}
