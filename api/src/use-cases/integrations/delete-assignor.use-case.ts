import { AssignorRepository } from '@/infra/repository/prisma/assignor.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class DeleteAssignorUseCase {
  constructor(
    @Inject(AssignorRepository)
    private readonly assignorRepository: AssignorRepository
  ) {}

  async exec({ id }: { id: string }) {
    const assignor = await this.assignorRepository.delete({ id })

    return assignor
  }
}
