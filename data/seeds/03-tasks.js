/** @format */

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('tasks').insert([
        { id: 1, 
          task_name: 'rowValue1', 
          project_id: 1,
          description: '',
          notes: '',
          completed: false
        },
        { id: 2,
          task_name: 'rowValue1', 
          project_id: 1,
          description: '',
          notes: '',
          completed: false
        },
        { id: 3,
          task_name: 'rowValue1', 
          project_id: 1,
          description: '',
          notes: '',
          completed: false  
        },
			]);
		});
};
