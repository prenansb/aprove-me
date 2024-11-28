import { IsEmail, IsOptional, IsPhoneNumber, MaxLength } from 'class-validator'

export class UpdateAssignorDto {
  @IsOptional()
  @MaxLength(140)
  name: string

  @IsOptional()
  @MaxLength(30)
  document: string

  @IsOptional()
  @MaxLength(140)
  @IsEmail()
  email: string

  @IsOptional()
  @MaxLength(20)
  @IsPhoneNumber('BR')
  phone: string
}
