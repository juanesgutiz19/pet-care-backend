import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
  
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':idCategoria/servicios')
  findServiciosPorIdCategoria(@Param('idCategoria', ParseUUIDPipe) idCategoria: string) {
    return this.categoriasService.obtenerServicios(idCategoria);
  }

}
