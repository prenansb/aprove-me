import { PayableRepository } from '@/infra/repository/prisma/payable.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class GetPayableByIdUseCase {
  constructor(
    @Inject(PayableRepository)
    private readonly payableRepository: PayableRepository
  ) {}

  async exec({ id }: { id: string }) {
    const assignor = await this.payableRepository.getById({ id })

    return assignor
  }
}
