import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto, EditPostDto } from './dto';

@Controller('post')
export class PostController {
  @Get()
  getMany() {
    return 'holi post';
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return {
      message: `getOne: ${id} : ${typeof id}`,
    };
  }

  @Post()
  createOne(@Body() dto: CreatePostDto) {
    return dto;
  }

  @Put(':id')
  editOne(@Param('id') id: string, @Body() dto: EditPostDto) {
    return dto;
  }

  // @Delete()
  // deleteOne() {}
}
