import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
  
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  @Auth( ValidRoles.profesional )
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':idCategoria/servicios')
  @Auth( ValidRoles.profesional )
  findServiciosPorIdCategoria(@Param('idCategoria', ParseUUIDPipe) idCategoria: string) {
    return this.categoriasService.obtenerServicios(idCategoria);
  }

}
