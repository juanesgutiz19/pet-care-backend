import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiciosService } from './servicios.service';
import { Servicio } from 'src/servicios/entities/servicio.entity';
import { ServiciosController } from './servicios.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ ServiciosController ],
  providers: [ServiciosService],
  imports: [
    TypeOrmModule.forFeature([ Servicio ]),
    AuthModule
  ],
  exports: [ TypeOrmModule ]
})
export class ServiciosModule {}
