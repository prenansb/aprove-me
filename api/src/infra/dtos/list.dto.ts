import { IsNumberString, IsOptional } from 'class-validator'

export class ListDto {
  @IsOptional()
  @IsNumberString()
  page?: number

  @IsOptional()
  @IsNumberString()
  limit?: number
}
