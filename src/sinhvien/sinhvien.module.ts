/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SinhvienController } from './controllers/sinhvien/sinhvien.controller';
import { SinhvienService } from './services/sinhvien/sinhvien.service';
import { Tbl_SinhVien } from './tbl_sinhvien.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tbl_SinhVien])],
  controllers: [SinhvienController],
  providers: [SinhvienService],
})
export class SinhvienModule {}
