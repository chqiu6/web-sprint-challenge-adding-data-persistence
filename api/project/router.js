// build your `/api/projects` router here
// [ ] `[POST] /api/projects`
// - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
// - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

// - [ ] `[GET] /api/projects`
// - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
// - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

const express = require("express")
const projectModel = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) =>{
    try {
    const projectData = await projectModel.getAll()
    console.log("What's our data looking like ? ", projectData)
    res.status(200).json(projectData)
    } catch(err) {
        next(err);
    }
})

router.post("", async (req, res, next) => {
    try{
    const projectCreate = await projectModel.create(req.body)
    console.log("Did we successfully post? ", projectCreate)
    res.status(201).json(projectCreate)
    } catch(err) {
        next(err);
    }
})

module.exports = router;