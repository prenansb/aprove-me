import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
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
      throw new UnauthorizedException('Invalid credentials - user not found')
    }

    const isPasswordValid = await this.hashComparer.compare(
      data.password,
      user.password
    )

    if (!isPasswordValid) {
      throw new UnauthorizedException(
        'Invalid credentials - incorrect password'
      )
    }

    const token = await this.encrypter.encrypt({
      sub: user.id.toString(),
    })

    return token
  }
}
