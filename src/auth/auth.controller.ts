import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login() {
    return 'estas autenticado';
  }

  @Get('profile')
  profile() {
    return 'perfil';
  }
}
