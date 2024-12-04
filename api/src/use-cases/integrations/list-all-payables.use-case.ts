import { PayableRepository } from '@/infra/repository/prisma/payable.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class ListAllPayablesUseCase {
  constructor(
    @Inject(PayableRepository)
    private readonly payableRepository: PayableRepository
  ) {}

  async exec({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
    return await this.payableRepository.listAll({ page, limit })
  }
}
