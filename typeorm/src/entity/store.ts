import {Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn} from "typeorm";
import "reflect-metadata"

@Entity({ name: "stores"})
export default class Store {

    @PrimaryGeneratedColumn({ name: "id"})
    id!: number;

    @Column({name: "name", nullable: true})
    name!: string;

    @Column({name: "address", nullable: true})
    address!: string;

    @DeleteDateColumn({name: "deleted_at", nullable : true})
    deletedAt!: Date;

}