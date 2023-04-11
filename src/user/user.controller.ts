/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Patch, Post, Request} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
 constructor(private readonly userService: UserService){}
    @Get('pages?')
    async pagination(@Request() request) {
    return await this.userService.paginate(
        request.query.hasOwnProperty('page') ? request.query.page : 0,
        request.query.hasOwnProperty('size') ? request.query.size :10,
        request.query.hasOwnProperty('sort') ? request.query.sort : 'name',
        request.query.hasOwnProperty('order') ? request.query.order : 'asc',
        request.query.hasOwnProperty('seach') ? request.query.seach : '',
        );
    }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.userService.findById(BigInt(id));
  }

  @Post() 
  async create(@Body() createUserDTO: CreateUserDto) {
    return await this.userService.create(createUserDTO);
  } 

  @Patch(':id')
  async update(@Param('id') id: string, 
  @Body() UpdateUserDto: UpdateUserDto){
    return await this.userService.update(BigInt(id), UpdateUserDto)
   }
  }

