import type { CreatePayableDto } from '@/infra/dtos/create-payable.dto'
import { PayableRepository } from '@/infra/repository/prisma/payable.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class CreatePayableUseCase {
  constructor(
    @Inject(PayableRepository)
    private readonly payableRepository: PayableRepository
  ) {}

  async exec(payable: CreatePayableDto) {
    await this.payableRepository.create(payable)
  }
}
