import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Docuemnt } from 'mongoose';
import * as mongoose from 'mongoose'

export type MessageDocument = Message & Document;


@Schema()
export class Message {
  @Prop(new mongoose.Types.ObjectId())
  _id?: string

  @Prop()
  room: string;

  @Prop()
  txt: string

  @Prop()
  createdAt?: string

}

export const MessageSchema = SchemaFacoty.createForClass(Message);
