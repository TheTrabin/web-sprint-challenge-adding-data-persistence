/** @format */

exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('resource')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('resource').insert([
				{
					id: 1,
					resource_name: 'Computers',
					description: 'The driving force of programming.',
				},
				{ id: 2, resource_name: 'Hard Drives', description: 'Storage' },
				{
					id: 3,
					resource_name: 'Controllers',
					description: 'Various methods of input',
				},
				{
					id: 4,
					resource_name: 'Ovens',
					description: 'Baking things, like bread',
				},
				{
					id: 5,
					resource_name: 'Stoves',
					description: 'For SOUP!',
        },
        {id: 6,
          resource_name: 'Desks and Tables',
          description: 'Elevated flat working surfaces.'}
			]);
		});
};
