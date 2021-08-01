import {Router} from "express"
const router = Router()
const {getStores} = require("../controllers/index.controller")

router.get("/stores", getStores)


module.exports = router;
