import { IsEmail, IsNotEmpty, IsPhoneNumber, MaxLength } from 'class-validator'

export class CreateAssignorDto {
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
