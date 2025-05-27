import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "../service/auth.service";
import { LoginDto , SignUpDto } from "../commons/dto";
@Controller("auth")
export class AuthController {
  constructor(private readonly authServices: AuthService) {}

  @Post("/login")
  public login(@Body() loginDto: LoginDto) {
    return this.authServices.login(loginDto)
  }

  @Post("/signUp")
  public signUp(@Body() signUpDto: SignUpDto) {
    return this.authServices.signUp;
  }

  @Get("/logout")
  public logOut() {
    return this.logOut;
  }
}
