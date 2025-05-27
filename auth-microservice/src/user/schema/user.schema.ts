import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  keycloakId: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ default: false })
  isActive: boolean;

  @Prop([String])
  roles: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);