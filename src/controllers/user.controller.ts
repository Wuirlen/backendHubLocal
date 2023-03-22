import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDto, LoginUserDto } from '@dtos';

import { UserUseCases } from '@user/user.use-cases';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private userUseCases: UserUseCases) {}

  @ApiOperation({ summary: 'Register a user'})
  @ApiResponse({ status: 409, description: 'Conflict' })
  @ApiResponse({ status: 201, description: 'Created' })
  @Post('/register')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userUseCases.createUser(createUserDto);
  }

  @ApiOperation({ summary: 'Log in to the application'})
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 201, description: 'Created' })
  @Post('/login')
  @HttpCode(200)
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.userUseCases.loginUser(loginUserDto);
  }
}
