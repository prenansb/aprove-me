import type { CreatePayableAndAssignorDto } from '@/infra/dtos/create-payable-and-assignor.dto'
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

  async exec({ payable, assignor: assignorData }: CreatePayableAndAssignorDto) {
    const assignor = await this.assignorRepository.create(assignorData)

    await this.payableRepository.create({ ...payable, assignorId: assignor.id })
  }
}
