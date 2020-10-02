import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {
        //
    }

    @Get('index')
    @HttpCode(200)
    getIndexData() {
        return this.userService.getUserData();
    }

    // from database
    @Get('all')
    getUsersData() {
        return this.userService.getUsers();
    }

    @Get('all/:id')
    getUserData(@Param() param) {
        return this.userService.getUser(param.id);
    }

    @Post('create')
    createUserData(@Body() user: UserEntity) {
        return this.userService.createUser(user);
    }

    @Get('param/:data')
    getTheData(@Param('data') param) {
        return param;
    }
}
