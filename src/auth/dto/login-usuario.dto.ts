import { IsString, MaxLength, MinLength } from 'class-validator';


export class LoginUsuarioDto {

    @IsString()
    @MinLength(1)
    usuario: string;

    @IsString()
    @MinLength(6)
    @MaxLength(60)
    contrasena: string;

}