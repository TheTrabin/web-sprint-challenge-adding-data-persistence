/** @format */

const db = require('../data/db-config.js');

module.exports = {
	find,
	findById,
	add,
	update,
	remove,
};

function find() {
	return db('resource');
}

function findById(id) {
	return db('resource').where({ id }).first();
}

function add(data) {
	return db('resource')
		.insert(data)
		.then((ids) => {
			return findById(ids[0]);
		});
}

function update(changes, id) {
	return db('resource')
		.where({ id })
		.update(changes)
		.then((count) => {
			return findById(id);
		});
}

function remove(id) {
	return db('resource').where({ id }).del();
}
