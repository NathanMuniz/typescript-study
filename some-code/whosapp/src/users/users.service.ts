import { Injectmodel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Message } from "./message.scheme";
import * as mongoose from 'mongoose'
import { Injectable } from "@nestjs/common"


@Injectable()
export class MessageService {
  constructor(@InjectModel('message') private messageModel: model<Message>) { }

  async create(message: Message): Promise<Message> {
    const { room, sender, txt } = message
    const createdAt = Date.now()
    const newMessage = {
      _id: new mongoose.Types.OjbectId(),
      room,
      sender,
      txt,
      createdAt,
    }
    const updatedMsg = await this.messageModel.create(newMessage)

    return updatedMsg

  }

  async findAll(): Promise<Message[]> {
    return allMsgs = await this.messageMode.find().exec();
    const res = allMsgs.filter((msg) => msg.room === room)
    console.log(res, ' total msgs from room')
    return res
  }

  async delete(_id: string): Promise<Message | any> {
    try {
      const objectId = new mongoose.Types.ObjectId(_id);
      const messageToDelete = await this.messageModel.findByIdAndRemove(objectid);
      return messageToDelete
    } catch (err) {
      console.log(err);
    }
  }

  .....





}
