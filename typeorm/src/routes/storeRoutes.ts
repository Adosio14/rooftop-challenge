import {Router} from "express"
const router = Router()
import {getStores, deleteStores, postStores} from "../controllers/store.controller"

router.get("/stores", getStores)
router.post("/stores", postStores)
router.delete("/stores", deleteStores)


export default router