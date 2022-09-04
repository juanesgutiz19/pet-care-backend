import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth, GetUser } from './decorators';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { Usuario } from 'src/auth/entities/usuario.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('login')
  loginUser(@Body() loginUsuarioDto: LoginUsuarioDto ) {
    return this.authService.login( loginUsuarioDto );
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(
    @GetUser() usuario: Usuario
  ) {
    return this.authService.checkAuthStatus( usuario );
  }

}
