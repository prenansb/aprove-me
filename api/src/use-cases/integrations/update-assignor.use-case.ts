import type { UpdateAssignorDto } from '@/infra/dtos/update-assignor.dto'
import { AssignorRepository } from '@/infra/repository/prisma/assignor.repository'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class UpdateAssignorUseCase {
  constructor(
    @Inject(AssignorRepository)
    private readonly assignorRepository: AssignorRepository
  ) {}

  async exec({ id, data }: { id: string; data: UpdateAssignorDto }) {
    const assignor = await this.assignorRepository.update({ id, data })

    return assignor
  }
}
