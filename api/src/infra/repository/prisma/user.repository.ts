import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import type { AuthDto } from '@/infra/dtos/auth.dto'

@Injectable()
export class UserRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async create(data: AuthDto) {
    await this.prisma.user.create({
      data: {
        login: data.login,
        password: data.password,
      },
    })
  }

  async getUser(data: AuthDto) {
    return await this.prisma.user.findFirst({
      where: {
        login: data.login,
      },
    })
  }
}
