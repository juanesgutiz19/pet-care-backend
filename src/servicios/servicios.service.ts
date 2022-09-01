import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from './entities/servicio.entity';

@Injectable()
export class ServiciosService {

  constructor(

    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,

  ) { }

  async findAll() {
    return await this.servicioRepository.find({});
  }

}
