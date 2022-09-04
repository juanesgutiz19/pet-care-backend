import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ServiciosPrestadosService } from './servicios-prestados.service';
import { CreateServicioPrestadoDto } from './dto/create-servicio-prestado.dto';
import { GetServiciosPrestadosFiltrosDto } from './dto/get-servicios-prestados-filtros.dto';
import { Auth, GetUser } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { Usuario } from 'src/auth/entities/usuario.entity';

@Controller('servicios-prestados')
export class ServiciosPrestadosController {
  constructor(private readonly serviciosPrestadosService: ServiciosPrestadosService) {}

  @Post()
  @Auth( ValidRoles.profesional )

  create( 
    @Body() createServicioPrestadoDto: CreateServicioPrestadoDto,
    @GetUser() usuario: Usuario
  ) {
    return this.serviciosPrestadosService.create(createServicioPrestadoDto, usuario);
  }

  @Get()
  @Auth( ValidRoles.profesional )
  findAll( @Query() getServiciosPrestadosFiltrosDto: GetServiciosPrestadosFiltrosDto ) {
    return this.serviciosPrestadosService.findAll(getServiciosPrestadosFiltrosDto);
  }

}
