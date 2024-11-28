import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import type { UpdateAssignorDto } from '@/infra/dtos/update-assignor.dto'

@Injectable()
export class AssignorRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(assignorData: {
    id: string
    document: string
    email: string
    phone: string
    name: string
  }) {
    const assignor = await this.prisma.assignor.create({
      data: assignorData,
    })

    return assignor
  }

  async getById({ id }: { id: string }) {
    const assignor = await this.prisma.assignor.findUnique({
      where: {
        id,
      },
    })

    return assignor
  }

  async update({ id, data }: { id: string; data: UpdateAssignorDto }) {
    return await this.prisma.assignor.update({ where: { id }, data })
  }

  async delete({ id }: { id: string }) {
    const assignor = await this.prisma.assignor.delete({
      where: {
        id,
      },
    })

    return assignor
  }
}
