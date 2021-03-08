// build your `/api/tasks` router here
// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

const express = require("express")
const taskModel = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) =>{
    try {
    const taskData = await taskModel.getAll()
    res.status(200).json(taskData)
    } catch(err) {
        next(err);
    }
})

router.post("", async (req, res, next) => {
    try{
    const taskCreate = await taskModel.create(req.body)
    res.status(201).json(taskCreate)
    } catch(err) {
        next(err);
    }
})

module.exports = router;