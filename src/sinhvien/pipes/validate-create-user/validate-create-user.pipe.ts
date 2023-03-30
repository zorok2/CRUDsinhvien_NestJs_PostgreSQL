import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { HttpStatus } from "@nestjs/common/enums";
import { HttpException } from "@nestjs/common/exceptions";
import { CreateSinhVienDto } from "src/sinhvien/dtos/createSvDtos";

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateSinhVienDto, metadata: ArgumentMetadata) {
    console.log("Inside validate pip");
    console.log(value);
    console.log(metadata);
    const parseIdtoInt = parseInt(value.id.toString());
    if (isNaN(parseIdtoInt)) {
      throw new HttpException(
        "invalid data type for ID properties",
        HttpStatus.NOT_ACCEPTABLE
      );
    } else {
      return {
        ...value,
        age: parseIdtoInt,
      };
    }
  }
}
