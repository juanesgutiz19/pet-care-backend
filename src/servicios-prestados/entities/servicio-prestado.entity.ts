import { Servicio } from 'src/servicios/entities/servicio.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'servicios_prestados' })
export class ServicioPrestado {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(
        () => Servicio,
        (servicio) => servicio.serviciosPrestados
    )
    servicio: Servicio


    @Column('text')
    nombrePaciente: string;

    @Column('text')
    edadPaciente: string;

    @Column('text')
    pesoKg: string;

    @Column('text')
    nombrePropietario: string;

    @Column('text')
    telefonoPropietario: string;

    @Column('text')
    correoPropietario: string;

    @Column({
        type: 'text',
        nullable: true
    })
    sintomas: string;

    @Column({
        type: 'text',
        nullable: true
    })
    antecedentes: string;

    @Column({
        type: 'text',
        nullable: true
    })
    diagnostico: string;

    @Column({
        type: 'text',
        nullable: true
    })
    tratamiento: string;

    @Column('text')
    especie: string;

    @Column('text')
    razaPaciente: string;

    @Column('text')
    sexoPaciente: string;

    @Column('bool', {
        default: false
    })
    esAtencionDomiciliaria: boolean;

    @Column('float', {
        default: 0
    })
    total: number;

    @Column({
        type: 'text',
        nullable: true
    })
    indicacionesPropietario: string;

    @Column({
        type: 'text',
        nullable: true
    })
    cuidadosRequeridos: string;

    @Column({
        type: 'text',
        nullable: true
    })
    horasEstadia: string;

    @CreateDateColumn({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    fechaActual: Date;

    // TODO: profesional

}
