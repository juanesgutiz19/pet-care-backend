import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiciosService {

  findAll() {
    return `This action returns all servicios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} servicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicio`;
  }
}
