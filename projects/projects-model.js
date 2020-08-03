/** @format */

const db = require('../data/db-config.js');

module.exports = {
	find,
	findById,
	findTask,
	add,
	addTask,
	update,
	remove,
};

function find() {
	return db('projects');
}

function findById(id) {
	return db('projects').where({ id }).first();
}

function findTask(id) {
	return db('projects').where('projects_id', id);
}

function add(data) {
	return db('projects')
		.insert(data)
		.then((ids) => {
			return findById(ids[0]);
		});
}

function addTask(data, id) {
	return db('tasks').insert(data).where('project_id', id);
}

function update(changes, id) {
	return db('projects')
		.where({ id })
		.update(changes)
		.then((count) => {
			return findById(id);
		});
}

function remove(id) {
	return db('projects').where({ id }).del();
}
