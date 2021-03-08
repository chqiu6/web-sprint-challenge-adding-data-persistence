// build your `/api/resources` router here
// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

const express = require("express")
const resourceModel = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) =>{
    try {
    const resourceData = await resourceModel.getAll()
    res.status(200).json(resourceData)
    console.log("Our resource ", resourceData)
    } catch(err) {
        next(err);
    }
})

router.post("", async (req, res, next) => {
    try{
    const resourceCreate = await resourceModel.create(req.body)
    res.status(201).json(resourceCreate)
    } catch(err) {
        next(err);
    }
})

module.exports = router;