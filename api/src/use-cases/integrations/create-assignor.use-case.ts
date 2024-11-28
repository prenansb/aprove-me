import type { CreateAssignorDto } from '@/infra/dtos/create-assignor.dto'
import { AssignorRepository } from '@/infra/repository/prisma/assignor.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class CreateAssignorUseCase {
  constructor(
    @Inject(AssignorRepository)
    private readonly assignorRepository: AssignorRepository
  ) {}

  async exec(assignor: CreateAssignorDto) {
    return await this.assignorRepository.create(assignor)
  }
}
