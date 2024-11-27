import type { Prisma } from '@prisma/client'

import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class StampRequestsRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create({
    company_id,
    user_id,
  }: Prisma.stamp_requestUncheckedCreateInput) {
    const stampRequest = await this.prisma.stamp_request.create({
      data: {
        company_id,
        user_id,
      },
    })

    return stampRequest
  }

  async filterPaginatedByStatusAndQuery({
    page,
    query,
    status,
  }: {
    status?: Prisma.stamp_requestWhereInput['status']
    query?: string
    page: number
  }) {
    const stampRequests = await this.prisma.stamp_request.findMany({
      where: {
        ...(status ? { status } : {}),
        ...(query
          ? {
              OR: [
                {
                  company: {
                    OR: [
                      { name: { contains: query } },
                      { cnpj: { contains: query } },
                    ],
                  },
                },
                {
                  user: {
                    OR: [
                      { name: { contains: query } },
                      { email: { contains: query } },
                    ],
                  },
                },
              ],
            }
          : {}),
      },
      orderBy: {
        created_at: 'desc',
      },
      include: {
        company: true,
        user: true,
      },
      take: 10,
      skip: (page - 1) * 10,
    })

    return stampRequests
  }

  async getByCompanyId(companyId: number) {
    const stampRequest = await this.prisma.stamp_request.findUnique({
      where: {
        company_id: companyId,
      },
    })

    return stampRequest
  }

  async getByIdWithDocuments(id: number) {
    const stampRequest = await this.prisma.stamp_request.findUnique({
      where: {
        id,
      },
      include: {
        stamp_request_document: true,
      },
    })

    return stampRequest
  }

  async finish(id: number) {
    const stampRequest = await this.prisma.stamp_request.update({
      where: {
        id,
      },
      data: {
        finished_at: new Date(),
      },
    })

    return stampRequest
  }

  async changeStampRequestStatus({
    id,
    reject_reason,
    status,
  }: {
    id: number
    reject_reason: Prisma.stamp_requestUncheckedCreateWithoutUserInput['reject_reason']
    status: Prisma.stamp_requestUncheckedCreateWithoutUserInput['status']
  }) {
    const stampRequest = await this.prisma.stamp_request.update({
      where: {
        id,
      },
      data: {
        status,
        reject_reason,
      },
    })

    return stampRequest
  }
}
