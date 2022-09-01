import { Module } from '@nestjs/common';
import { ServiciosPrestadosService } from './servicios-prestados.service';
import { ServiciosPrestadosController } from './servicios-prestados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioPrestado } from './entities/servicio-prestado.entity';
import { ServiciosModule } from 'src/servicios/servicios.module';
import { Servicio } from '../servicios/entities/servicio.entity';

@Module({
  controllers: [ServiciosPrestadosController],
  providers: [ServiciosPrestadosService],
  imports: [
    TypeOrmModule.forFeature([ ServicioPrestado, Servicio ]),
    ServiciosModule
  ],
  exports: [TypeOrmModule]
})
export class ServiciosPrestadosModule { }
