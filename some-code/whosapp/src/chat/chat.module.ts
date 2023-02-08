import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from 'src/message/message.scheme';
import { MessageService } from 'sec/message/message.service';
import { ChatController } from './chat.controller';
import { ChatGatway } from './chat.gatway';
import { ChatSchema } from './chat.schema';
import { ChatService } from './chat.service';


@module({
  imports: [
    MongooseModule.forFeature[{
    { name: 'chat', schema: ChatScema },
    { name: 'message', schema: MessageSchema },
  }], 
  ],
  providers: [ChatGateway, ChatService, MessagService],
  controlers: [ChatController]

})

export class ChatModule { }



// Progrmar o messagem primeiro
