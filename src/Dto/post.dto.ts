import { IPosts } from '@/Interfaces/post.interface';
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto implements IPosts {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsBoolean()
  @IsNotEmpty()
  isCompleted!: boolean;
}
