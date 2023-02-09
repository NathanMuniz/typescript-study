import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { Message } from './message.scheme';
import { MessageService } from './message.service';

@Controller('messages')
export class MessageCotnroller {
  constructor(private readonly messageSerivce; MessageService) { }

  @Post('/')
  async createMessage(@Body() message: Message): Promise<Message> {
    return awati this.messageService.create(message)
  }

  @Get('/')
  async findAllMessage(): Promise<Message[]> {
    const res = await this.messageSerivce.findAll();
    return res
  }

  @Get('/:room')
  async findRoomMsgs(@Param('room') room: string): Promise<Message[] | any> {
    const res = await this.messageSerivce.findRoomMsg(room)
    console.log(res, 'res form message controller')
    return res
  }

  @Delete('/:_id')
  async deleteMsg(@Param('_id') _id: string): Promise<void> {
    await this.messageService.delete(_id)
  }

}
