// - [ ] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

//   - [ ] `project_id` - primary key
//   - [ ] `project_name` - required
//   - [ ] `project_description` - optional
//   - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided

// [ ] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

//   - [ ] `resource_id` - primary key
//   - [ ] `resource_name` - required and unique
//   - [ ] `resource_description` - optional

//   [ ] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

//   - [ ] `task_id` - primary key
//   - [ ] `task_description` - required
//   - [ ] `task_notes` - optional
//   - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
//   - [ ] `project_id` - required and points to an actual `project_id` in the `projects` table

// - [ ] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.

exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("project_id")
        table.text("project_name").notNull()
        table.text("project_description")
        table.boolean("project_completed").defaultTo(false)
    });
  
    await knex.schema.createTable("resources", (table) => {
        table.increments("resource_id")
        table.text("resource_name").notNull().unique()
        table.text("resource_description")
    });
  
    await knex.schema.createTable("tasks", (table) =>{ 
        table.increments("task_id")
        table.text("task_description").notNull()
        table.text("task_notes")
        table.boolean("task_completed").defaultTo(0)
        table.integer("project_id")
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    });
  
    await knex.schema.createTable("project_resources", (table) => {
        table.integer("project_id")
        .notNull()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
  
        table.integer("resource_id")
        .notNull()
        .references("resource_id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        table.primary(["project_id", "resource_id"])
    });
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
  };
