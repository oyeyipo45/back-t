import { PostController } from "../Controllers/post.controller";
import express from "express";

//initiating the router
export const router = express.Router()

//add post route
router.post("/", PostController.createPost);

//get posts
router.get('/', PostController.getPosts)