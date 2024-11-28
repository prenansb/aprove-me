import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPhoneNumber,
  IsUUID,
  IsDate,
  ValidateNested,
  MaxLength,
  IsOptional,
} from 'class-validator'
import { Type } from 'class-transformer'

export class PayableDto {
  @IsOptional()
  @IsUUID()
  id: string

  @IsNotEmpty()
  @IsNumber()
  value: number

  @IsNotEmpty()
  @IsDate()
  emissionDate: Date

  @IsNotEmpty()
  @IsUUID()
  assignorId: string
}

export class AssignorDto {
  @IsNotEmpty()
  @IsUUID()
  id: string

  @IsNotEmpty()
  @MaxLength(30)
  document: string

  @IsNotEmpty()
  @MaxLength(140)
  @IsEmail()
  email: string

  @IsNotEmpty()
  @MaxLength(20)
  @IsPhoneNumber('BR')
  phone: string

  @IsNotEmpty()
  @MaxLength(140)
  name: string
}

export class CreatePayableDto {
  @IsObject()
  @ValidateNested()
  @Type(() => PayableDto)
  payable: PayableDto

  @IsObject()
  @ValidateNested()
  @Type(() => AssignorDto)
  assignor: AssignorDto
}
