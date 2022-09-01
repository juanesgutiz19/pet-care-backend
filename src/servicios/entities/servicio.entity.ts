import { ServicioPrestado } from 'src/servicios-prestados/entities/servicio-prestado.entity';
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Categoria } from '../../categorias/entities/categoria.entity';

@Entity({ name: 'servicios' })
export class Servicio {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
    })
    nombre: string;

    @Column('float', {
        default: 0
    })
    precio: number;

    @ManyToOne(
        () => Categoria,
        (categoria) => categoria.servicios
    )
    categoria: Categoria

    @OneToMany(
        () => ServicioPrestado,
        (servicioPrestado) => servicioPrestado.servicio
    )
    serviciosPrestados?: ServicioPrestado[];

}
