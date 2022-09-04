import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { Usuario } from './entities/usuario.entity';
import { LoginUsuarioDto } from './dto/login-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    private readonly jwtService: JwtService
  ) { }


  async login(loginUsuarioDto: LoginUsuarioDto) {

    const { usuario, contrasena } = loginUsuarioDto;

    const userDB = await this.usuarioRepository.findOne({
      where: { usuario },
      select: { usuario: true, contrasena: true, id: true, nombreCompleto: true, urlImagen: true }
    });

    console.log('userDB');
    console.log(userDB);

    if (!userDB)
      throw new UnauthorizedException('El usuario ingresado no es válido');

    console.log(contrasena);
    console.log(userDB.contrasena);
    if (!bcrypt.compareSync(contrasena, userDB.contrasena))
      throw new UnauthorizedException('La contraseña ingresada no es válida');

    return {
      ...userDB,
      token: this.getJwtToken({ id: userDB.id, usuario: userDB.id, nombreCompleto: userDB.nombreCompleto, urlImagen: userDB.urlImagen })
    };
  }

  async checkAuthStatus(usuario: Usuario) {

    return {
      ...usuario,
      token: this.getJwtToken({ id: usuario.id, usuario: usuario.id, nombreCompleto: usuario.nombreCompleto, urlImagen: usuario.urlImagen })
    };

  }

  private getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }

}
