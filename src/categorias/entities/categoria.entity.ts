import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Servicio } from '../../servicios/entities/servicio.entity';

@Entity({ name: 'categorias' })
export class Categoria {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {
        unique: true,
    })
    nombre: string;

    @Column('text')
    urlImagen: string;

    @OneToMany(
        () => Servicio,
        ( servicio ) => servicio.categoria
    )
    servicios?: Servicio[];

}
