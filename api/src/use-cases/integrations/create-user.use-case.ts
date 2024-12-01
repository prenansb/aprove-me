import { Inject, Injectable } from '@nestjs/common'
import type { AuthDto } from '@/infra/dtos/auth.dto'
import { UserRepository } from '@/infra/repository/prisma/user.repository'
import { BcryptHasher } from '@/infra/cryptography/bcrypt-hasher'

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly hashGenerator: BcryptHasher
  ) {}

  async exec(data: AuthDto) {
    const user = await this.userRepository.getUser(data)

    if (user) {
      throw new Error('User already exists!')
    }

    const hashedPassword = await this.hashGenerator.hash(data.password)

    return await this.userRepository.create({
      login: data.login,
      password: hashedPassword,
    })
  }
}
