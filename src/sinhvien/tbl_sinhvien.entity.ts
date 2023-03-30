/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Tbl_SinhVien {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  name:string;
}
