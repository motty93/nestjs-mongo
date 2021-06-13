import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  UseFilters,
} from '@nestjs/common'
import { HttpExceptionFilter } from 'src/common/filters/http_exception.filter'
import { TestPipe } from 'src/common/pipes/test.pipe'
import { UsersService } from './users.service'

@Controller('users')
@UseFilters(HttpExceptionFilter)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): string {
    return this.usersService.getUsers()
  }

  // @Get(':id')
  // getUser(@Param('id', ParseIntPipe) id: number): number {
  //   return id
  // }

  @Get(':id')
  getUser(@Param('id', TestPipe) id: number): number {
    return id
  }

  @Get('throw')
  getException(): string {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
  }

  @Get('override')
  @UseGuards(AuthGuard) // Guardを登録(本当はPostとかに使うとよき)
  getOverRideException(): string {
    throw new HttpException(
      { status: HttpStatus.FORBIDDEN, error: 'override custom' },
      HttpStatus.FORBIDDEN,
    )
  }
}
