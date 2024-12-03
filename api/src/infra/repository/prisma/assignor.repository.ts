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

  async listAll() {
    return await this.prisma.assignor.findMany()
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
