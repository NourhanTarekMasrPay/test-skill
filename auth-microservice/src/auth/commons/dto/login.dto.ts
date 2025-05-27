import {  IsNotEmpty } from 'class-validator';
export class LoginDto {
  @IsNotEmpty()
  key: string;

  @IsNotEmpty()
  password : string;
  
}
