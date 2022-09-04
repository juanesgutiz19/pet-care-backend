import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ServicioPrestado } from '../../servicios-prestados/entities/servicio-prestado.entity';


@Entity('usuarios')
export class Usuario {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true
    })
    usuario: string;

    @Column('text', {
        select: false
    })
    contrasena: string;

    @Column('text')
    nombreCompleto: string;

    @Column('text')
    urlImagen: string;

    @OneToMany(
        () => ServicioPrestado,
        ( servicioPrestado ) => servicioPrestado.profesional
    )
    serviciosPrestados: ServicioPrestado[];

    @Column('text', {
        array: true,
        default: ['admin']
    })
    roles: string[];

}
