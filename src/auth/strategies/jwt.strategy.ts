import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ) {

    constructor(
        @InjectRepository( Usuario )
        private readonly usuarioRepository: Repository<Usuario>,

    ) {
        super({
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }


    async validate( payload: JwtPayload ): Promise<Usuario> {
        
        const { id } = payload;

        const usuario = await this.usuarioRepository.findOneBy({ id });

        if ( !usuario ) 
            throw new UnauthorizedException('Token not valid');
            
        return usuario;
    }

}