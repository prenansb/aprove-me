import { Inject, Injectable } from '@nestjs/common'
import type { AuthDto } from '@/infra/dtos/auth.dto'
import { UserRepository } from '@/infra/repository/prisma/user.repository'
import { JwtEncrypter } from '@/infra/cryptography/jwt-encrypter'
import { BcryptHasher } from '@/infra/cryptography/bcrypt-hasher'

@Injectable()
export class GetUserUseCase {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly hashComparer: BcryptHasher,
    private readonly encrypter: JwtEncrypter
  ) {}

  async exec(data: AuthDto) {
    const user = await this.userRepository.getUser(data)

    if (!user) {
      return 'User not found!'
    }

    const isPasswordValid = await this.hashComparer.compare(
      data.password,
      user.password
    )

    if (!isPasswordValid) {
      return 'Password invalid!'
    }

    const accessToken = await this.encrypter.encrypt({
      sub: user.id.toString(),
    })

    return accessToken
  }
}
