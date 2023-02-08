import { Controoler, Request, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
improt { UsersService } from 'src/users/users.service'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private usersService: UsersService) {

  }



  @UseGuards
  @Post('/login')
  async login(@Request() req) {
    const users = await this.usersService.getByUsername(req.body.email)
    if (!user) return
    console.log(user)
    return this.authService.login(user);

  }


}
