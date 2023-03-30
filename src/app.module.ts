/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SinhvienModule } from './sinhvien/sinhvien.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { Tbl_SinhVien } from './sinhvien/tbl_sinhvien.entity';
@Module({
  imports: [
    // ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'SinhVienManament',
      entities: [Tbl_SinhVien],
      synchronize: true,
    }),
    SinhvienModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
