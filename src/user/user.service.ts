import { ConflictException, HttpException, Injectable, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor (
    private prismaService : PrismaService
  ) {}

  async create(createUserDto: CreateUserDto) : Promise<User>{

    const user = await this.findByEmail(createUserDto.email); 

    if (user) {

      throw new ConflictException("User already exist")

    }

    return await this.prismaService.user.create({

      data: createUserDto,
      include: {
        tasks: true 
      }

    });
  }

  async findAll(): Promise<User[]>{
    return await this.prismaService.user.findMany({
      include: {
        tasks: true 
      }
    });
  }

  async findOne(id: number) : Promise<User> {
    return await this.prismaService.user.findUnique({
      where: {
        id 
      }, 
      include: {
        tasks: true 
      }
    });
  }

  async findByEmail (email: string) : Promise<User> {
    return await this.prismaService.user.findUnique({
      where: {
        email
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) : Promise<User> {
    return await this.prismaService.user.update({
      where: {
        id
      }, 
      data: updateUserDto
    });
  }

  remove(id: number) : Promise<User> {
    return this.prismaService.user.delete({
      where: {
        id 
      }
    });
  }
}
