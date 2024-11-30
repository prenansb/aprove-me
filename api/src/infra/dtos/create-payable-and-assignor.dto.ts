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
  @IsNotEmpty()
  @IsNumber()
  value: number

  @IsNotEmpty()
  @IsDate()
  emissionDate: Date
}

export class AssignorDto {
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

export class CreatePayableAndAssignorDto {
  @IsObject()
  @ValidateNested()
  @Type(() => PayableDto)
  payable: PayableDto

  @IsObject()
  @ValidateNested()
  @Type(() => AssignorDto)
  assignor: AssignorDto
}
