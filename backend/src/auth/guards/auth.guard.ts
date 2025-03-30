import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { UserService } from '../../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(private readonly userService: UserService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (typeof request.session.userId === 'undefined') {
      throw new UnauthorizedException(
        'Пользователь не авторизован. Пожалуйста, войдите в систему.',
      );
    }

    request.user = await this.userService.findById(request.session.userId);

    return true;
  }
}
