import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @ApiCreatedResponse({
    type: User 
  })
  @Post()
  async create(@Body() createUserDto: CreateUserDto) : Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @ApiOkResponse({
    type: [User] 
  })
  @UseGuards(AuthGuard)
  @Get()
  async findAll() : Promise<User[]> {
    return await this.userService.findAll();
  }

  @ApiOkResponse({
    type: User 
  })
  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<User> {
    return await this.userService.findOne(+id);
  }

  @ApiOkResponse({
    type: User 
  })
  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) : Promise<User> {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOkResponse({
    type: User 
  })
  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
