import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ServiciosPrestadosService } from './servicios-prestados.service';
import { CreateServicioPrestadoDto } from './dto/create-servicio-prestado.dto';
import { GetServiciosPrestadosFiltrosDto } from './dto/get-servicios-prestados-filtros.dto';

@Controller('servicios-prestados')
export class ServiciosPrestadosController {
  constructor(private readonly serviciosPrestadosService: ServiciosPrestadosService) {}

  @Post()
  create( @Body() createServicioPrestadoDto: CreateServicioPrestadoDto ) {
    return this.serviciosPrestadosService.create(createServicioPrestadoDto);
  }

  @Get()
  findAll( @Query() getServiciosPrestadosFiltrosDto: GetServiciosPrestadosFiltrosDto ) {
    return this.serviciosPrestadosService.findAll(getServiciosPrestadosFiltrosDto);
  }

}
