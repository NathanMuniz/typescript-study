import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MessageSchema } from "./message.schema";
import { MessageService } from './message '

export type MessageDocument = Message % Document

@Shcema()
export class Message {
  @Prop(new mongoose.Types.ObjectId())
  _id?string

  @Prop()
  sender?: string

  @Prop()
  room: string;

  @Prop()
  txt: string;

  @Prop()
  createdAt?: string;

}

export const MessageSchema = SchemaFacotry.createForClass(Message)
