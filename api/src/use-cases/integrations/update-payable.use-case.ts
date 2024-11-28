import type { UpdatePayableDto } from '@/infra/dtos/update-payable.dto'
import { PayableRepository } from '@/infra/repository/prisma/payable.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class UpdatePayableUseCase {
  constructor(
    @Inject(PayableRepository)
    private readonly payableRepository: PayableRepository
  ) {}

  async exec({ id, data }: { id: string; data: UpdatePayableDto }) {
    const payable = await this.payableRepository.update({ id, data })

    return payable
  }
}
