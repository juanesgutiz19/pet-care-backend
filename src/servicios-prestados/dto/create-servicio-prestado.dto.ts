// import { ApiProperty } from '@nestjs/swagger';
import {
    IsArray, IsBoolean, IsIn, IsNumber, IsOptional,
    IsPositive, IsString, MinLength
} from 'class-validator';

export class CreateServicioPrestadoDto {

    @IsString({ each: true })
    @IsArray()
    servicios: string[];

    @IsString()
    @MinLength(1)
    nombrePaciente: string;

    @IsString()
    @MinLength(1)
    edadPaciente: string;

    @IsString()
    @MinLength(1)
    pesoKg: string;

    @IsString()
    @MinLength(1)
    nombrePropietario: string;

    @IsString()
    @MinLength(1)
    telefonoPropietario: string;

    @IsString()
    @MinLength(1)
    correoPropietario: string;

    @IsString()
    @IsOptional()
    sintomas?: string;

    @IsString()
    @IsOptional()
    antecedentes?: string;

    @IsString()
    @IsOptional()
    diagnostico?: string;

    @IsString()
    @IsOptional()
    tratamiento?: string;

    @IsIn(['canino', 'felino'])
    especie: string;

    @IsString()
    @MinLength(1)
    razaPaciente: string;

    @IsIn(['macho', 'hembra'])
    sexoPaciente: string;

    @IsBoolean()
    esAtencionDomiciliaria: boolean;

    @IsNumber()
    @IsPositive()
    total: number;

    @IsString()
    @IsOptional()
    indicacionesPropietario?: string;

    @IsString()
    @IsOptional()
    cuidadosRequeridos?: string;

    @IsString()
    @IsOptional()
    horasEstadia?: string;

}
