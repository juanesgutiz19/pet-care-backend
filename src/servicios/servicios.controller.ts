import { Controller, Get } from '@nestjs/common';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces/valid-roles';
import { ServiciosService } from './servicios.service';

@Controller('servicios')
export class ServiciosController {
  
  constructor(private readonly serviciosService: ServiciosService) {}

  @Get()
  @Auth( ValidRoles.profesional )
  findAll() {
    return this.serviciosService.findAll();
  }

}
