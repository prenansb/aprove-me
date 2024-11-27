import type { Prisma, stamp_request_document_type } from '@prisma/client'

import { Inject, Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'

@Injectable()
export class StampRequestDocumentsRepository {
  constructor(@Inject(PrismaService) private prisma: PrismaService) {}

  async create({
    stamp_request_id,
    document_key,
    document_type,
  }: Prisma.stamp_request_documentUncheckedCreateInput) {
    const document = await this.prisma.stamp_request_document.create({
      data: {
        stamp_request_id,
        document_key,
        document_type,
      },
    })

    return document
  }

  async delete({ documentId }: { documentId: number }) {
    const document = await this.prisma.stamp_request_document.delete({
      where: {
        id: documentId,
      },
    })

    return document
  }

  async sameDocumentOnManyTypes({ document_key }: { document_key: string }) {
    return await this.prisma.stamp_request_document.findMany({
      where: {
        document_key,
      },
    })
  }

  async getById({ id }: { id: number }) {
    const document = await this.prisma.stamp_request_document.findUnique({
      where: {
        id,
      },
    })

    return document
  }

  async getByStampRequestIdAndDocumentType({
    stamp_request_id,
    document_type,
  }: {
    stamp_request_id: number
    document_type: stamp_request_document_type
  }) {
    const document = await this.prisma.stamp_request_document.findUnique({
      where: {
        stamp_request_id_document_type: {
          stamp_request_id,
          document_type,
        },
      },
    })

    return document
  }

  async getCompanyFileCount({
    stamp_request_id,
  }: { stamp_request_id: number }) {
    const documents = await this.prisma.stamp_request_document.count({
      where: {
        stamp_request_id,
      },
    })

    return documents
  }

  async getCompanyFiles({ stamp_request_id }: { stamp_request_id: number }) {
    const documents = await this.prisma.stamp_request_document.findMany({
      where: {
        stamp_request_id,
      },
    })

    return documents
  }
}
