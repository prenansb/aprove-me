import type { CreatePayableDto } from '@/infra/dtos/create-payable.dto'
import { AssignorRepository } from '@/infra/repository/prisma/assignor.repository'
import { PayableRepository } from '@/infra/repository/prisma/payable.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class CreatePayableAndAssignorUseCase {
  constructor(
    @Inject(PayableRepository)
    private readonly payableRepository: PayableRepository,
    @Inject(AssignorRepository)
    private readonly assignorRepository: AssignorRepository
  ) {}

  async exec({ payable, assignor }: CreatePayableDto) {
    const assignorExists = await this.assignorRepository.getById({
      id: assignor.id,
    })

    if (!assignorExists) {
      await this.assignorRepository.create(assignor)
    }

    await this.payableRepository.create(payable)
  }
}
