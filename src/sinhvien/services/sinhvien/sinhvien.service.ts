/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSinhVienDto } from 'src/sinhvien/dtos/createSvDtos';
import { SinhVien } from 'src/sinhvien/models/SinhVienUsers';
import { Tbl_SinhVien } from 'src/sinhvien/tbl_sinhvien.entity';
import { Repository } from 'typeorm';
@Injectable()
export class SinhvienService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(@InjectRepository(Tbl_SinhVien) private usersRepository: Repository<Tbl_SinhVien>){}
 
  async findSinhVien(id: number): Promise<Tbl_SinhVien | null>{
    return await this.usersRepository.findOneBy({id});
  }
  
  async createSinhVien(sv: SinhVien): Promise<Tbl_SinhVien> {
    // this.users.push(addsv);
    // return this.users;
    return await this.usersRepository.save(sv);
  }

  getAllSinhViens(): Promise<Tbl_SinhVien[]> {
    return this.usersRepository.find();
  }

  async deleteSinhVienbyID(id: number): Promise<void>{
    // const indexobj = this.users.findIndex((sv) => sv.id === id);
    // this.users.splice(indexobj,1);
    await this.usersRepository.delete(id);
  }


  async updateSinhVien(id: number, user: CreateSinhVienDto): Promise<Tbl_SinhVien>{
    await this.usersRepository.update(id, user);
    return await this.usersRepository.findOneBy({id});
  }
}
