//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Orders')
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  OrderID: string;

  @Column('integer', { nullable: true })
  UserID: number;

  @Column('integer', { nullable: true })
  RestaurantID: number;

  @Column('integer', { nullable: true })
  ItemsOrdered: number;

  @Column('real', { nullable: true })
  TotalPrice: number;

  @Column('text', { nullable: true })
  OrderStatus: string;

  @Column('text', { nullable: true })
  DeliveryAddress: string;

  @Column('date', { nullable: true })
  OrderDateTime: Date;
}
