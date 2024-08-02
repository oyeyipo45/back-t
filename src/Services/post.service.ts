//import module
import { CreatePostDto } from "@Dto/post.dto";
import { PostModel } from "../Models/posts";
import { IPosts } from "@/Interfaces/post.interface";
import { isEmpty } from "class-validator";
import { HttpException } from "../Exceptions/HttpException";
export class PostService {
  // create post
  async createPost(post: CreatePostDto): Promise<IPosts> {
    if (isEmpty(post)) throw new HttpException(400, "post is empty");

    const createpost: IPosts = await PostModel.create(post);

    return createpost;
  }

  // get all posts
  async getPosts(filter?: string) {
    const query = filter !== "all" ? { isCompleted: filter } : {};

    try {
      const posts = await PostModel.find(query);
      return posts;
    } catch (error) {
      console.log(error);
    }
  }
}
