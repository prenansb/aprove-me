import { IsDate, IsNumber, IsOptional, IsUUID } from 'class-validator'

export class UpdatePayableDto {
  @IsOptional()
  @IsNumber()
  value: number

  @IsOptional()
  @IsDate()
  emissionDate: Date

  @IsOptional()
  @IsUUID()
  assignorId: string
}
