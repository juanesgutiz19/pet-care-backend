import { Injectable } from '@nestjs/common';
import { CreateServicioPrestadoDto } from './dto/create-servicio-prestado.dto';
import { ServicioPrestado } from './entities/servicio-prestado.entity';
import { Servicio } from '../servicios/entities/servicio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, In, Repository } from 'typeorm';

@Injectable()
export class ServiciosPrestadosService {


  constructor(

    @InjectRepository(ServicioPrestado)
    private readonly servicioPrestadoRepository: Repository<ServicioPrestado>,

    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,

  ) { }


  async create(createServicioPrestadoDto: CreateServicioPrestadoDto) {
    console.log(createServicioPrestadoDto);

    const { servicios: idsServicios = [], ...detallesServicioPrestado } = createServicioPrestadoDto;

    const servicios = await this.servicioRepository.findBy({ id: In(idsServicios) });

    const servicioPrestado = this.servicioPrestadoRepository.create({
      ...detallesServicioPrestado,
      servicios
    });

    await this.servicioPrestadoRepository.save(servicioPrestado);

    return { ...servicioPrestado, servicios };

  }

  async findAll() {

    let findArgs = { 
      where:{
        fechaActual: Between(new Date("2022-08-30T05:27:47.844Z"), new Date("2022-09-08T05:27:47.844Z"))
      },
      relations: ["servicios", "servicios.categoria"]
    };
    const serviciosPrestados = await this.servicioPrestadoRepository.find(findArgs);


    console.log(serviciosPrestados);
    
    
    return { serviciosPrestados };
  }
}
