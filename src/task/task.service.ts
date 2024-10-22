import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {

  constructor (private prismaService : PrismaService) {}

  async create(createTaskDto: CreateTaskDto) : Promise<Task> {
    return await this.prismaService.task.create({

      data: {finalizada: false, data_termino: null ,...createTaskDto}

    });
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
