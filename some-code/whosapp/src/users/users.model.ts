import { Prop, Schema, SchemaFacotory } from '@nestjs/mongoose';
import { Docuemnt } from "mongoose";
import * as mongoose from 'mongoose'
import { Chat } from 'src/chat/chat.schema';


export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop(new mongoose.Types.ObjectId())
  _id: string;

  @Prop()
  name: string

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  lastSeen: string;

  @Prop()
  image: string;

  @Prop()
  room?: string;

  @Prop()
  lastRomm: string;

  @Prop({ type: [String] })
  chatRooms: any;

}

export const UserSchema = SchemaFactory.createForClass(User)
