import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import "reflect-metadata"

@Entity({ name: "coupons"})
export default class Coupon {

    @Column({ name: "assigned_at", nullable: true })
    assignedAt!: Date;

    @Column({width : 8, nullable: true})
    code!: number;

    @Column({nullable: true})
    customer_email!: string;

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column({ name: "expires_at", nullable: true })
    expiresAt!: Date;

}