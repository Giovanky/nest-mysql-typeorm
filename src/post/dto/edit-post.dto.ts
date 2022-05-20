import { CreatePostDto } from './create-post.dto';
import { PartialType } from '@nestjs/mapped-types';
import { OmitType } from '@nestjs/swagger';

export class EditPostDto extends PartialType(
  OmitType(CreatePostDto, ['slug'] as const), // ignora este campo al enviar form
) {}
