import { Module } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';

@Module({
  providers: [ AuthService],
  controllers: [AuthController],
  exports: [],
})
export class AuthModule {}
