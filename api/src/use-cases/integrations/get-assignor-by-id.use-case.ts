import { AssignorRepository } from '@/infra/repository/prisma/assignor.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class GetAssignorByIdUseCase {
  constructor(
    @Inject(AssignorRepository)
    private readonly assignorRepository: AssignorRepository
  ) {}

  async exec({ id }: { id: string }) {
    const assignor = await this.assignorRepository.getById({ id })

    return assignor
  }
}
