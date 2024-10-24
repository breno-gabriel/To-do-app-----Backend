import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UsePipes, ValidationPipe, Request } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './entities/task.entity';

@ApiTags('task')
@UsePipes(ValidationPipe)
@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiCreatedResponse({
    type: Task 
  })
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto, @Request() req : any) : Promise<Task> {
    return await this.taskService.create(createTaskDto, req.user.id);
  }

  @Get()
  async findAll() : Promise<Task[]>{
    return await this.taskService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<Task> {
    return await this.taskService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
    return await this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) : Promise<Task> {
    return await this.taskService.remove(+id);
  }
}
