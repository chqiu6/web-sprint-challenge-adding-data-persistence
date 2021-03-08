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
     projectData.map(item => {
        console.log("looking at our items", item.project_completed);
         item.project_completed === 0 
         ? {... item, project_completed : item.project_completed = false} 
         : {...item, project_completed : item.project_completed  = true};
    })
    // projectData.map(item => {
    //     if(item.project_completed = 0 ) {
    //         return {
    //             ...item, project_completed : false
    //         }
    //     } else {
    //         return {
    //             ...item, project_completed : true
    //         }
    //     }
    // })
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