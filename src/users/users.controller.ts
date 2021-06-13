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
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
  }

  @Get('override')
  getOverRideException(): string {
    throw new HttpException(
      { status: HttpStatus.FORBIDDEN, error: 'override custom' },
      HttpStatus.FORBIDDEN,
    )
  }
}
