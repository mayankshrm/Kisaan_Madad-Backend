
import bodyParser from "body-parser";

import express from "express";

const router= express.Router();


import { createPost, getPost,getPost1 } from "../controller/postData.js";
router.get("/",getPost);
router.get("/:name",getPost1);
router.post("/",createPost);


export default router;

