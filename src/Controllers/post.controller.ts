//import modules
import { PostService } from "../Services/post.service";
import { NextFunction, Request, Response } from "express";
import { PostschemaValidate } from "../Models/posts";
import { CreatePostDto } from "@Dto/post.dto";
import { IPosts } from "@/Interfaces/post.interface";

class postController {
  //constructor(private readonly postService: PostService) {}

  public postService = new PostService();

  public createPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const post: CreatePostDto = req.body;
      const createdPost = await this.postService.createPost(post);

        
        res.status(201).json({ data: createdPost, message: "created post successfully" });
    } catch (error) {
      next(error);
    }
  };

}

export const PostController = new postController();
