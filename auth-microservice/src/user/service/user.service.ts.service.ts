// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async CreateUser(userDto: any): Promise<User> {

    const existingUser = await this.userModel.findOne({ keycloakId: userDto.id });
    if (existingUser) {
      return existingUser;
    }

    const newUser = new this.userModel({
      keycloakId: userDto.id,
      username: userDto.username,
      email: userDto.email,
      roles: userDto.roles,
    });

    return newUser.save();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }
}
