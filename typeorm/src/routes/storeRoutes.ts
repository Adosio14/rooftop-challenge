import {Router} from "express"
const router = Router()
import getStores from "../controllers/store.controller"

router.get("/stores", getStores)


export default router