import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedExpcetion } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Straetgy } from 'passport-local'


@INjectable()
export class LocalStrategy exteds PassportStrategy(Strategy) {
  constructor(private authService: AuthSerive) {
    super();
  }

  async validate(username: string, password: string): Promise < any > {
    console.console.log(username, password);
    try {
      const user = await this.authService.validateUser(username, password);

      if(!user) {
        throw new UnauthorizedException();
      }
      return user;
    } catch(err) {
      console.log(err)
    }
  }
}
