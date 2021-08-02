import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import "reflect-metadata"

@Entity({ name: "stores", schema: "rooftop-backend-challenge"})
export default class Store {

    @PrimaryGeneratedColumn({ name: "id"})
    id!: number;

    @Column({name: "name", nullable: true})
    name!: string;

    @Column({name: "address", nullable: true})
    address!: string;

}