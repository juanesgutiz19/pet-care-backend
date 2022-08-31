import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiciosService } from './servicios.service';
import { Servicio } from 'src/servicios/entities/servicio.entity';

@Module({
  controllers: [ ],
  providers: [ServiciosService],
  imports: [
    TypeOrmModule.forFeature([ Servicio ]),
  ],
  exports: [ TypeOrmModule ]
})
export class ServiciosModule {}
