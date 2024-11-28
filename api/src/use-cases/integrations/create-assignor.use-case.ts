import type { AssignorDto } from '@/infra/dtos/create-payable.dto'
import { AssignorRepository } from '@/infra/repository/prisma/assignor.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class CreateAssignorUseCase {
  constructor(
    @Inject(AssignorRepository)
    private readonly assignorRepository: AssignorRepository
  ) {}

  async exec(assignor: AssignorDto) {
    return await this.assignorRepository.create(assignor)
  }
}
