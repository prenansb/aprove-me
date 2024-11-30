import { PrismaService } from '@/infra/repository/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { faker } from '@faker-js/faker'

@Injectable()
export class PayableFactory {
  constructor(private readonly prisma: PrismaService) {}

  async makePrismaPayable({ assignorId }: { assignorId: string }) {
    return await this.prisma.payable.create({
      data: {
        emissionDate: faker.date.anytime(),
        value: faker.number.float(),
        assignorId,
      },
    })
  }
}
