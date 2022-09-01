// import { ApiProperty } from '@nestjs/swagger';
import {
    IsOptional,
} from 'class-validator';

export class GetServiciosPrestadosFiltrosDto {

    @IsOptional()
    idCategoria?: string;

    @IsOptional()
    idServicio?: string;

    @IsOptional()
    fechaInicio?: string;

    @IsOptional()
    fechaFin?: string;

}
