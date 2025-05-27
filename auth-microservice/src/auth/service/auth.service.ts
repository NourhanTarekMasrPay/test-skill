import { Injectable } from '@nestjs/common';
import { LoginDto, SignUpDto } from '../commons/dto';

@Injectable()
export class AuthService {
constructor( ) {}
login(loginDto: LoginDto) {}
logout() {}
signUp(signUpDto: SignUpDto) {}


}