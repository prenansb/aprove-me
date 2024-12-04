import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import type { UpdatePayableDto } from '@/infra/dtos/update-payable.dto'

@Injectable()
export class PayableRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create(payableData: {
    value: number
    emissionDate: Date
    assignorId: string
  }) {
    const payable = await this.prisma.payable.create({
      data: payableData,
    })

    return payable
  }

  async getById({ id }: { id: string }) {
    const payable = await this.prisma.payable.findUnique({
      where: {
        id,
      },
    })

    return payable
  }

  async listAll({ page, limit }: { page: number; limit: number }) {
    const skip = (page - 1) * limit

    const [total, payables] = await Promise.all([
      this.prisma.payable.count(),
      this.prisma.payable.findMany({
        select: {
          id: true,
          value: true,
          emissionDate: true,
          assignor: {
            select: {
              name: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: {
          emissionDate: 'desc',
        },
      }),
    ])

    return {
      data: payables,
      meta: {
        total,
        page,
        lastPage: Math.ceil(total / limit),
      },
    }
  }

  async update({ id, data }: { id: string; data: UpdatePayableDto }) {
    return await this.prisma.payable.update({
      where: { id },
      data: { ...data },
    })
  }

  async delete({ id }: { id: string }) {
    const payable = await this.prisma.payable.delete({
      where: {
        id,
      },
    })

    return payable
  }
}
