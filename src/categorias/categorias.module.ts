import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { ServiciosModule } from '../servicios/servicios.module';
import { Servicio } from 'src/servicios/entities/servicio.entity';

@Module({
  controllers: [CategoriasController],
  providers: [CategoriasService],
  imports: [ 
    TypeOrmModule.forFeature([ Categoria, Servicio ]),
    ServiciosModule
   ],
  exports: [ TypeOrmModule ]
})
export class CategoriasModule {}
