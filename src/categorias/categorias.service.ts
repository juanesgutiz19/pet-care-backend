import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {

  constructor(

    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,

  ) { }

  async findAll() {
    return await this.categoriaRepository.find({});
  }

  async obtenerServicios(id: string) {
    const categoria = await this.categoriaRepository.findOne({
      where: {
        id
      },
      relations: {
        servicios: true,
      }
    });

    if ( !categoria ) 
      throw new NotFoundException(`Categoría con id ${ id } no fue encontrada`);

    return categoria.servicios;
  }

}
