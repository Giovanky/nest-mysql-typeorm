import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, EditUserDto } from './dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getMany() {
    const data = await this.userService.getMany();
    return {
      message: 'ok',
      data,
    };
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const user = await this.userService.getOne(id);
    if (!user) throw new NotFoundException('User does not exists');
    return {
      message: 'ok',
      data: user,
    };
  }

  @Post()
  async createOne(@Body() dto: CreateUserDto) {
    const data = await this.userService.createOne(dto);
    return {
      message: 'User created',
      data,
    };
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: EditUserDto) {
    const data = await this.userService.editOne(id, dto);
    return {
      message: 'User edited',
      data,
    };
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.userService.deleteOne(id);
    return {
      message: 'User deleted',
      data,
    };
  }
}
