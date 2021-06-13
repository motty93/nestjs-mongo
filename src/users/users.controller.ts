import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common'
import { HttpExceptionFilter } from 'src/common/filters/http_exception.filter'
import { UsersService } from './users.service'

@Controller('users')
@UseFilters(HttpExceptionFilter)
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
