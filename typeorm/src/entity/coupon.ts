import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import "reflect-metadata"

@Entity({ name: "coupons", schema: "rooftop-backend-challenge" })
export class Coupon {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "assigned_at" })
    assignedAt!: Date;

    @Column({
        width : 8
    })
    code!: number;

    @Column()
    customer_email!: string;

    @Column({ name: "expires_at" })
    expiresAt!: Date;

}