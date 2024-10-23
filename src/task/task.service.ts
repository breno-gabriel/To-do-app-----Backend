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

  async findAll(): Promise<Task[]> {
    return this.prismaService.task.findMany(); 
  }

  async findOne(id: number) : Promise<Task>{
    return await this.prismaService.task.findUnique({

      where: {
        id 
      }

    });

  }

  async update(id: number, updateTaskDto: UpdateTaskDto) : Promise<Task> {

    if (updateTaskDto.finalizada) {

      const date = new Date();

      updateTaskDto['data_termino'] = date.toISOString();

    }

    return await this.prismaService.task.update({
      where: {
        id
      }, 
      data: {...updateTaskDto}
    });
  }

  async remove(id: number) : Promise<Task> {
    return this.prismaService.task.delete({
        where: {
          id 
        }
    });
  }
}
