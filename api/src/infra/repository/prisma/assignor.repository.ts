import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import type { UpdateAssignorDto } from '@/infra/dtos/update-assignor.dto'
import type { CreateAssignorDto } from '@/infra/dtos/create-assignor.dto'

@Injectable()
export class AssignorRepository {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async create(assignorData: CreateAssignorDto) {
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

  async listAll({ page, limit }: { page: number; limit: number }) {
    const skip = (page - 1) * limit

    const [total, assignors] = await Promise.all([
      this.prisma.assignor.count(),
      await this.prisma.assignor.findMany({
        skip,
        take: limit,
      }),
    ])

    return {
      data: assignors,
      meta: {
        total,
        page,
        lastPage: Math.ceil(total / limit),
      },
    }
  }

  async update({ id, data }: { id: string; data: UpdateAssignorDto }) {
    return await this.prisma.assignor.update({
      where: { id },
      data: { ...data },
    })
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
