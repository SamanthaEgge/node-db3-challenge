const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
  find,
  findByID,
  findSteps,
  add,
  update,
  remove
}

function find() {
  return db('schemes')
}

function findByID(id) {
  return db('schemes')
    .where({ id })
}

function findSteps(id) {
  return db('schemes AS s')
    .join('steps AS st')
    .select('st.id', 's.scheme_name', 'st.step_number' ,  'st.instructions')
    .where('st.scheme_id' = id)
}

function add(scheme) {
  return db('schemes')
    .insert(scheme)
}

function update(changes, id) {
  return db('schemes')
    .where('schemes.id' = id)
    .update(changes)
}

function remove(id) {
  return db('schemes')
    .where('schemes.id' = id)
    .del()
}
