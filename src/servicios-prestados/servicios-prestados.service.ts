import { Injectable } from '@nestjs/common';
import { CreateServicioPrestadoDto } from './dto/create-servicio-prestado.dto';
import { ServicioPrestado } from './entities/servicio-prestado.entity';
import { Servicio } from '../servicios/entities/servicio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { GetServiciosPrestadosFiltrosDto } from './dto/get-servicios-prestados-filtros.dto';
import * as moment from 'moment-timezone';

@Injectable()
export class ServiciosPrestadosService {

  constructor(

    @InjectRepository(ServicioPrestado)
    private readonly servicioPrestadoRepository: Repository<ServicioPrestado>,

    @InjectRepository(Servicio)
    private readonly servicioRepository: Repository<Servicio>,

  ) { }

  async create(createServicioPrestadoDto: CreateServicioPrestadoDto, usuario) {

    const { servicio: idServicio, ...detallesServicioPrestado } = createServicioPrestadoDto;
    const servicio = await this.servicioRepository.findOneBy({ id: idServicio });

    const fechaHoy = moment().tz('America/Bogota');
    const fechaHoyCompleta = fechaHoy.format('YYYY-MM-DD');

    const servicioPrestado = this.servicioPrestadoRepository.create({
      ...detallesServicioPrestado,
      servicio,
      profesional: usuario,
      fecha: fechaHoyCompleta
    });

    await this.servicioPrestadoRepository.save(servicioPrestado);
    return { ...servicioPrestado, servicio };
  }

  // TODO: Pendiente validar con más detalle el funcionamiento de las fechas
  async findAll(getServiciosPrestadosFiltrosDto: GetServiciosPrestadosFiltrosDto) {

    // Ni idServicio ni idCategoría -> No se añade ninguna condición
    // Solo idCategoría -> No se añade condición de idServicio y se filtran los serviciosPrestados que contengan la categoría con el id dado
    // Solo idServicio -> Se le da el manejo actual
    // Tanto idServicio como idCategoria (validar si el servicio pertenece a esa categoría) -> Igual manejo al de arriba
    const { idServicio, idCategoria, fechaInicio = "2000-01-01T00:00:00.005Z", fechaFin = "2100-01-01T00:00:00.005Z" } = getServiciosPrestadosFiltrosDto;
 
    const momentFechaFin = moment(fechaFin).tz('America/Bogota').add(1, 'day');
    const fechaFinFormateada = momentFechaFin.format('YYYY-MM-DD');

    console.log('fechaInicio');
    console.log(new Date(fechaInicio));

    console.log('fechaFin');
    console.log(new Date(fechaFinFormateada));

    let findArgs = {
      where: {
        fecha: Between(new Date(fechaInicio), new Date(fechaFinFormateada)),
        servicio: {}
      },
      relations: ["servicio", "servicio.categoria"]
    };

    if (idServicio || (idServicio && idCategoria)) {
      findArgs.where.servicio = {
        id: idServicio
      }
    }

    let serviciosPrestados = await this.servicioPrestadoRepository.find(findArgs);

    if (idCategoria && !idServicio) {
      const serviciosPrestadosDeCategoria = serviciosPrestados.filter(servicioPrestado => servicioPrestado.servicio.categoria.id === idCategoria);
      serviciosPrestados = serviciosPrestadosDeCategoria;
    }

    let totalVentas = serviciosPrestados.reduce( (acc, item)  => {
      return acc = acc + item.total;
    }, 0);

    return { serviciosPrestados, totalVentas };
    
  }
}
