const db = require('../data/db-config.js')


module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
};

function find() {
    return db('schemes')
};
function findById(id){
   return db('schemes').where({ id: Number(id)});
        
};
function findSteps(id){
    return db('steps')
        .innerJoin('schemes', 'steps.scheme_id', 'schemes.id')
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where('steps.scheme_id',id)
        .orderBy('steps.step_number');
};
function add(schemeData){
    return db('schemes')
        .insert(schemeData)
        .then(ids => ({ id: ids[0]}))
};
function addStep(stepData){
    return db('steps')
        .insert(stepData)
        .then(ids => ({ id: ids[0]}));
};
function update(changes, id) {
    return db('schemes')
        .where('id', Number(id))
        .update(changes)
}
function remove(id) {
    return db('schemes')
        .where('id', Number(id))
        .del();
}