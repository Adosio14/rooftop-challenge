import {Router} from "express"
const router = Router()
import {getStats} from "../controllers/stats.controller"

router.get("/stats",getStats )

    

export default router