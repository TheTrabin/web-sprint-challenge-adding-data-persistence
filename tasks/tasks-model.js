const db = require("../data/db-config.js")

module.exports = {
    add,
    getTasks,
    findById,
    // addTask,
} 

function add(data) {
	return db('tasks')
		.insert(data)
		.then((ids) => {
			return findById(ids[0]);
		});
}

function getTasks() {
    return db("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .select("p.id as project id", "t.description as task description", "t.notes as task notes", "t.completed as task completed", "p.project_name as project name", "p.description as project description")
}

function findById(id) {
    return db("tasks")
        .where({id})
        .first();
}

// function addTask(task) {
//     return db("tasks")
//         .insert(task)
//         .then(id => {
//             return findById(id[0]);
//         });
// }