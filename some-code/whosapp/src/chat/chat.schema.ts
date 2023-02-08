import { Prop, Schema, SchemaFacotory } from "@nestjs/mongoose";
import { Documento } from 'mongoose';

import * as mongoose from 'mongoose'

export type chatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop(new mongoose.Types.OjbectId())
  _id: string

  @Prop()
  room: string;

  @Prop()
  messages?: Array<any | null>

  @Prop()
  users?: Array<any | null>

  @Prop()
  createdByUserId?: string


}

export const ChatSchema = SchemaFacotory.createForClass(Chat);
