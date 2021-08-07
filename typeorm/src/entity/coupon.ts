import {Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn} from "typeorm";
import "reflect-metadata"

@Entity({ name: "coupons"})
export default class Coupon {

    @Column({ name: "assigned_at", nullable: true })
    assignedAt!: Date;

    @Column({length : 8, nullable: true})
    code!: string;

    @Column({nullable: true})
    customer_email!: string;

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column({ name: "expires_at", nullable: true })
    expiresAt!: Date;
    
    @DeleteDateColumn({name: "deleted_at", nullable : true})
    deletedAt!: Date;

}