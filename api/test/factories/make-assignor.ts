import { PrismaService } from '@/infra/repository/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { faker } from '@faker-js/faker'

@Injectable()
export class AssignorFactory {
  constructor(private readonly prisma: PrismaService) {}

  async makePrismaAssignor() {
    return await this.prisma.assignor.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number({ style: 'international' }),
        document: faker.lorem.sentence(),
      },
    })
  }
}
