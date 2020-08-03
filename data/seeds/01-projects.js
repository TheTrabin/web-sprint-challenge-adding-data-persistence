
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1,
        project_name: 'Game Design Company',
      description: 'Create an independant game company that makes small to large scale games'},
        {id: 2, project_name: 'Build a Cafe/Restaurant/Bistro',
        description: 'A place where gamers and programmers will feel at home to consume and relax'},
        {id: 3, project_name: 'Big Server',
        description: 'A couple of servers built for various different purposes'}
      ]);
    });
};
