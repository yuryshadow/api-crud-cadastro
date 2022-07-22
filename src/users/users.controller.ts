import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './shared/user';
import { UsersService } from './shared/users.service';


@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){    }

    @Get()
    async getAll(): Promise<User[]>{
        return this.userService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number) : Promise<User>{
        return this.userService.getById(id);
    }

    @Post()
    async create(@Body() user:User): Promise<User>{
        return this.userService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user:User): Promise<User>{
        user.id = id;
        return this.userService.update(user);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.userService.delete(id);
    }

}
