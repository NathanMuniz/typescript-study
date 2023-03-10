import { Module } from "@nestjs/common"
import { UsersModule } from "src/users/users.module";
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { AuthController } from "./auth.controller"
import { UsersService } from "src/users/users.service"
import { MongooseModule } from "@nestjs/mongoose"
import { UserSchema } from "../users/users.model"
import { LocalStrategy } from './local.auth';

@Module({
  imports: [UsersModule, Passport, JwtModule.register({
    secret: 'secretKey',
    signOptions: { expiresIn: '6d' },
  }), MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
  providers: [AuthService, UsersService, LocalStrategy],
  controllers: [AuthController],
})

export AuthModule { }
