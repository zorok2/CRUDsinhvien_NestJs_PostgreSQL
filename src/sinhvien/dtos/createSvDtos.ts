/* eslint-disable prettier/prettier */
import {IsEmail, IsNotEmpty, IsNumber, IsString} from 'class-validator'
export class CreateSinhVienDto {
  @IsNotEmpty()
  id: number;
  @IsString()
  name: string;
  @IsEmail()
  email: string;
}
