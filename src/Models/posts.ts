import { Schema, model } from "mongoose";
import Joi from "joi";
import { IPosts } from "@/Interfaces/post.interface";

//validation schema
export const PostschemaValidate = Joi.object({
  title: Joi.string().required(),
  isCompleted: Joi.boolean().required(),
  _id: Joi.string().required(),
});

// Postschema
const postSchema = new Schema<IPosts>({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

//creating a model
export const PostModel = model<IPosts>("Post", postSchema);
