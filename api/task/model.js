// build your `Task` model here
const db = require("../../data/dbConfig");

const getAll = () => {
    return db("tasks");
};

const create = (task) => {
    return db("tasks")
    .insert(task)
};

module.exports = {
    getAll,
    create
}