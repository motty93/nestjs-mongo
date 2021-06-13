import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Request } from 'express'
import { Observable } from 'rxjs'

const API_KEY = 'secret'

// ヘッダーのAuthorizationの値を検証する単純な関数
function validateRequest(request: Request): boolean {
  return request.header('Authorization') === API_KEY
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>()

    return validateRequest(request)
  }
}
