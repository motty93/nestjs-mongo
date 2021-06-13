import { Controller, Get } from '@nestjs/common'
import { AppService } from 'src/app.service'

@Controller('users')
export class UsersController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): string {
    return this.appService.getHello()
  }
}
