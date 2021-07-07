/** @format */

exports.up = function (knex) {
	return knex.schema
		.createTable('projects', (tbl) => {
			tbl.increments();
			tbl.string('project_name', 128).notNullable();
			tbl.string('description', 255).notNullable();
			tbl.boolean('complete').notNullable().defaultTo(false);
		})
		.createTable('resource', (tbl) => {
			tbl.increments();
			tbl.string('resource_name', 128).notNullable();
			tbl.string('description', 255).notNullable();
		})
		.createTable('tasks', (tbl) => {
			tbl.increments();
			tbl.string('task_name', 128).notNullable();
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('projects.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.string('description', 255).notNullable();
			tbl.string('notes', 255);
			tbl.boolean('completed').notNullable().defaultTo(false);
		})
		.createTable('project_resource', (tbl) => {
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('projects.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl
				.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('resource.id')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.primary(['project_id', 'resource_id']);
		});
};

exports.down = function (knex) {
	knex.schema
		.dropTableIfExists('project_tasks')
		.dropTableIfExists('tasks')
		.dropTableIfExists('resource')
		.dropTableIfExists('projects');
};
