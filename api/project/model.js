// build your `Project` model here
const db = require("../../data/dbConfig");

const getAll = () => {
    return db("projects");
};

// const getByProjectId = (id) => {
//     return db("projects")
//     .where({id})
//     .first();
// };

const create = (projects) => {
    return db("projects")
    .insert(projects)
    // .then(ids => {
    //     return getByProjectId(ids[0]);
    // });
};

module.exports = {
    getAll,
    create
}