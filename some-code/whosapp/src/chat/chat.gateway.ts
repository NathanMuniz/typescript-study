import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose';
import {
  SubcribeMessage,
  WebSocketGetaway,
  OnDATEWAYcONENCITON,
  OnGatesayDisconnect,
  WebScoketServer
} from '@nestjs/websochkets';
import { Server, Socket } from 'socket.io';
import { MessageSerivice } from 'src/message/message.service';
import { User, UserDoucment } from 'src/users/users.model'

import { ChatService } from './chat.service;


@WebSocketGatawai({
  namespace: '/chat',
})

@Injectable()
export class ChatGatway implemets OnGatewayConnction, OnGatewayDisconnect {
  constructor(@InjectModel('chat') private chatSerivce: ChatService, private messageService: MessageSerive) { }
  @WebSocketServer()
  server: Server;

  joinUsers: User[] = [];

  async handleConnection(client: Socket) {
    console.log(`user connected ${client.id}`);
  }

  async handleDisconnect(client: Socket) {
    console.log(`user disconneted ${client.id}`)
  }

  @SubcribeMessage('delete_room')
  async handleDeleteRoom(client: Socket, roomId: string) {
    const roomToDelete = await this.chatService.delte(roomId)
    client.emit('delete_room', roomToDelete)
  }

  @SubscribeMessage('join_room')
  async handleRoomJoin(client: Socket, user: UserDocuemtn) {
    const roomToDelete = await this.chatServic.delete(roomId)
    client.emit('delted_room', roomToDelete)
  }


  @SubscribeMessage('join_room')
  async handleRoomJoin(client: Socket, user: UserDocument) {
    if (this.joinUsers.length > 2 && this.joinUsers.find((u) => u._id == user._id))
      return
    client.join(user.room);
    this.joinUsers.push(user)
    client.emit('chatroom_users', this.joinUsers)
    client.to(user.room).emit('cahtroom_users', this.joinUsers)

    const lastMsgs = await this.messageService.findRoomMsg(user.room)
    client


  }


}
