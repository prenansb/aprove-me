import { IsDate, IsNotEmpty, IsNumber, IsUUID } from 'class-validator'

export class CreatePayableDto {
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
