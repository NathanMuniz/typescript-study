import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MessageSchema } from './message.scheme'
import { MessageService } from './message.service';

@Module({
  imports: [MongooseModule.forFeatures([{ name: 'message', schema: MessageSchema }])],
  provider: [MessageService],
  controller: []
})
export class MessageModule { }
