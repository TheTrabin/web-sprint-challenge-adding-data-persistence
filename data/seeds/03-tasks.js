/** @format */

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('tasks').insert([
        { id: 1, 
          task_name: 'Pick a name', 
          project_id: 1,
          description: 'Make a name that is not too incredibly terrible.',
          notes: '',
          completed: false
        },
        { id: 2,
          task_name: 'Get Materials', 
          project_id: 1,
          description: 'A good number of machines to do the coding and rendering',
          notes: 'Both AMD and Intel',
          completed: false
        },
        { id: 3,
          task_name: 'Create Games', 
          project_id: 1,
          description: 'Kind of obvious there.',
          notes: '',
          completed: false  
        },
        { id: 4, 
          task_name: 'Pick a name', 
          project_id: 2,
          description: 'Make a name that is not too incredibly terrible.',
          notes: 'Think food meets geek.',
          completed: false
        },
        { id: 5,
          task_name: 'Design area', 
          project_id: 2,
          description: 'See how things fit together and still be comfortable',
          notes: 'Kitchen and sitting area, including counter and how to pay.',
          completed: false
        },
        { id: 6,
          task_name: 'Create Menu', 
          project_id: 2,
          description: 'Kind of obvious there.',
          notes: '',
          completed: false  
        },
        { id: 7, 
          task_name: 'Location', 
          project_id: 3,
          description: 'Not too hot, not too cold.',
          notes: '',
          completed: false
        },
        { id: 8,
          task_name: 'Get Materials', 
          project_id: 3,
          description: 'Server blades, hard drives, all that jazz.',
          notes: 'Both AMD and Intel',
          completed: false
        },
        { id: 9,
          task_name: 'Initialize', 
          project_id: 3,
          description: 'Whatever OS on each drive, and connect',
          notes: 'Test. Test. Test often!',
          completed: false  
        },
			]);
		});
};
