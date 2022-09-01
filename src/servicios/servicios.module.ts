import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiciosService } from './servicios.service';
import { Servicio } from 'src/servicios/entities/servicio.entity';
import { ServiciosController } from './servicios.controller';

@Module({
  controllers: [ ServiciosController ],
  providers: [ServiciosService],
  imports: [
    TypeOrmModule.forFeature([ Servicio ]),
  ],
  exports: [ TypeOrmModule ]
})
export class ServiciosModule {}
