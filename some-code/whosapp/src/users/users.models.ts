import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from "@nestjs/mongoose"
import { UserSchema } from "./users.model"


@Module({
  imports: [MongooseModule.forFeature([{ name: "users", schema: UserSchema }])],
  providers: [UsersService],
  controlers: [UsersController]
})

export class UsersModule { }
