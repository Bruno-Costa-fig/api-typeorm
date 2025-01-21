import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn} from "typeorm"
import { User } from "./User"

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 200})
    nome: string

    @Column({length: 200})
    cidade: string

    @Column({length: 200})
    email: string

    @Column()
    userId: number

    @OneToOne(() => User)
    @JoinColumn()
    user: User
}