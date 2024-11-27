import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class UsersRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async getByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }
}
