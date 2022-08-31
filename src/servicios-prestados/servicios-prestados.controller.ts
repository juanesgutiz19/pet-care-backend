import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServiciosPrestadosService } from './servicios-prestados.service';
import { CreateServicioPrestadoDto } from './dto/create-servicio-prestado.dto';

@Controller('servicios-prestados')
export class ServiciosPrestadosController {
  constructor(private readonly serviciosPrestadosService: ServiciosPrestadosService) {}

  @Post()
  create(@Body() createServicioPrestadoDto: CreateServicioPrestadoDto) {
    return this.serviciosPrestadosService.create(createServicioPrestadoDto);
  }

  @Get()
  findAll() {
    return this.serviciosPrestadosService.findAll();
  }

}
