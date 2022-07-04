import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditPostDto } from 'src/post/dto';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity';
import { CreateUserDto, EditUserDto } from './dtos';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getMany() {
    return await this.userRepository.find();
  }

  async getOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User does not exist');
    return user;
  }

  async createOne(dto: CreateUserDto) {
    const userExist = await this.userRepository.findOne({
      where: { email: dto.email },
    });
    if (userExist) throw new BadRequestException('User exists');
    const newUser = await this.userRepository.create(dto);
    const user = await this.userRepository.save(newUser);
    delete user.password;
    return {
      message: 'User created',
      data: user,
    };
  }

  async editOne(id: number, dto: EditUserDto) {
    const user = await this.getOne(id);
    const editedUser = Object.assign(user, dto);
    return await this.userRepository.save(editedUser);
  }

  async deleteOne(id: number) {
    const user = await this.getOne(id);
    return await this.userRepository.remove(user);
  }
}
