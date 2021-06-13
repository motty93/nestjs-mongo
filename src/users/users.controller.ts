import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): string {
    return this.usersService.getUsers()
  }

  @Get('throw')
  getException(): string {
    throw new HttpException('FOrbidden', HttpStatus.FORBIDDEN)
  }
}
