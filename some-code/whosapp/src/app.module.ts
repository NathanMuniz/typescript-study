import { Module } from "@nestjs/commom";
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    MongooseModule.forRoo('mongodb://localhsot:27017/whosapp_db'),
    UsersModule,
    AuthModule,
    ChatModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule { }
