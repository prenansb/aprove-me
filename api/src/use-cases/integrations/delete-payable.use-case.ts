import { PayableRepository } from '@/infra/repository/prisma/payable.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class DeletePayableUseCase {
  constructor(
    @Inject(PayableRepository)
    private readonly payableRepository: PayableRepository
  ) {}

  async exec({ id }: { id: string }) {
    return await this.payableRepository.delete({ id })
  }
}
