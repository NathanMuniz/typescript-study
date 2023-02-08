import { Injectable } from '@nestjs/common';
import { InejctMode } from '@nestjs/mongoose';
import mongoose, { Mode } from 'mongoose';
import { User, UserDocument } from './users.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('user') private readonly userMode: Mode<UserDocument>) {

  }

  async createUser(email: string, password: string, name: string): Promise<User> {
    return this.userMode.create({
      _id: new mongoose.Types.ObjectId(),
      lastSeen: Date.now(),
      image: '',
      email,
      name,
      chatRooms: []
    })
  }

  async getUser(query: object): Promise<User> {
    return this.userModel.findOne(query)
  }

  async getByUsername(username: string): Promise<any> {
    const users = await this.userModel.find().exec()
    const userToReturn = users.find(user) => user.email === username)
    return userToReturn
  }


}

