/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Put,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { CreateSinhVienDto } from 'src/sinhvien/dtos/createSvDtos';
import { AuthGuard } from 'src/sinhvien/guard/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/sinhvien/pipes/validate-create-user/validate-create-user.pipe';
import { SinhvienService } from 'src/sinhvien/services/sinhvien/sinhvien.service';
@Controller('sinhvien')
export class SinhvienController {
  constructor(private sinhvienService: SinhvienService) {}
  @Get('/getsinhvien/:id')
  getSinhVienbyID(
    @Param('id', ParseIntPipe) id: number,
    //loi hai dong o ben duoi
    // @Req() req: Request,
    // @Res() res: Response,
  ) {
    const user = this.sinhvienService.findSinhVien(id);
    if(!user){
      throw new HttpException('User not found', HttpStatus.FORBIDDEN);

    }
    // return {id}
    return this.sinhvienService.findSinhVien(id);
  }
  @Get('/search/:id')
  searchSinhVienbyId(@Param('id', ParseIntPipe) id: number) {
    const sv = this.sinhvienService.findSinhVien(id);
    if (sv) {
      return sv;
    }
  }
  //
  @Get('')
  @UseGuards(AuthGuard)
  getAllSinhVien() {
    // return this.sinhvienService.getSinhViens();
    return this.sinhvienService.getAllSinhViens();
  }
  //
  @Post('create')
  @UsePipes(new ValidationPipe())
  createSinhVien(@Body(ValidateCreateUserPipe) sinhvien: CreateSinhVienDto) {
    return this.sinhvienService.createSinhVien(sinhvien);
  }

  @Delete('/deleteSinhVien/:id')
  deleteSinhVien(@Param('id', ParseIntPipe) id : number){
    this.sinhvienService.deleteSinhVienbyID(id);
    return this.sinhvienService.getAllSinhViens();
  }
  @Put('/update/:id')
  updateSinhVien(@Param('id', ParseIntPipe) id: number,@Body() sinhvien: CreateSinhVienDto){
    return this.sinhvienService.updateSinhVien(id, sinhvien);
  }

}
