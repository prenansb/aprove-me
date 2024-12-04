import { AssignorRepository } from '@/infra/repository/prisma/assignor.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class ListAllAssignorsUseCase {
  constructor(
    @Inject(AssignorRepository)
    private readonly assignorRepository: AssignorRepository
  ) {}

  async exec({ page = 1, limit = 10 }: { page?: number; limit?: number }) {
    return await this.assignorRepository.listAll({ page, limit })
  }
}
