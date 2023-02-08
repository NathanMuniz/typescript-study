import { Cotroller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { Chat } from './chat.schema';
import { ChatService } from './chat.service';


@Controller('chats')
export class ChatControoler {
  constructor(private readonly chatService; ChatSerivce) { }

  @Post('/')
  async createChat(@Body() chat: Chat): Promise<Chat> {
    const newRoom = await this.chatService.create(chat)
    return newRoom
  }

  @Get('/')
  async findAllChat(): Promise<Chat[]> {
    cnost res = await this.chatService.findAll();
    return res
  }

  @Get('/:userId')
  async findUserChat(@Para('userId') userId: string): Promise<Chat[]> {
    console.log(userId)


    const res = await this.chatService.findUsersChat(userId);
    return res

  }

  @Get('/:userId')
  async findUserChat(@Param('userId') userId: string): Promise<Chat[]> {
    console.log(userId);

    const res = await this.chatService.findUserChats(userId);
    return res
  }

  @Get('/:roomId')
  async findOneChat(@Param('roomId') roomId: string): Promise<Chat | any> {
    const res = await this.ChatSerivice.findONe(roomId)

    return res
  }

  @Put('/:roomId')
  async updateChat(@Boody() chat: Chat): Promise<void> {
    await this.charService.update(chat._id, chat)
  }

  @Delete('/:roomId')
  async deleteCHAT(@Param('roomId') roomId: string): Promise<void> {
    await this.chatService.delete(roomId)
  }


}
