import { CryptographyModule } from '@/infra/cryptography/cryptography.module'
import { RepositoryModule } from '@/infra/repository/repository.module'
import { CreateAssignorUseCase } from '@/use-cases/integrations/create-assignor.use-case'
import { CreatePayableAndAssignorUseCase } from '@/use-cases/integrations/create-payable-and-assignor.use-case'
import { CreatePayableUseCase } from '@/use-cases/integrations/create-payable.use-case'
import { CreateUserUseCase } from '@/use-cases/integrations/create-user.use-case'
import { DeleteAssignorUseCase } from '@/use-cases/integrations/delete-assignor.use-case'
import { DeletePayableUseCase } from '@/use-cases/integrations/delete-payable.use-case'
import { GetAssignorByIdUseCase } from '@/use-cases/integrations/get-assignor-by-id.use-case'
import { GetPayableByIdUseCase } from '@/use-cases/integrations/get-payable-by-id.use-case'
import { GetUserUseCase } from '@/use-cases/integrations/get-user.use-case'
import { UpdateAssignorUseCase } from '@/use-cases/integrations/update-assignor.use-case'
import { UpdatePayableUseCase } from '@/use-cases/integrations/update-payable.use-case'
import { Module } from '@nestjs/common'

@Module({
  imports: [RepositoryModule, CryptographyModule],
  providers: [
    CreatePayableAndAssignorUseCase,
    CreatePayableUseCase,
    CreateAssignorUseCase,
    GetAssignorByIdUseCase,
    GetPayableByIdUseCase,
    UpdateAssignorUseCase,
    UpdatePayableUseCase,
    DeleteAssignorUseCase,
    DeletePayableUseCase,
    GetUserUseCase,
    CreateUserUseCase,
  ],
  exports: [
    CreatePayableAndAssignorUseCase,
    CreatePayableUseCase,
    CreateAssignorUseCase,
    GetAssignorByIdUseCase,
    GetPayableByIdUseCase,
    UpdateAssignorUseCase,
    UpdatePayableUseCase,
    DeleteAssignorUseCase,
    DeletePayableUseCase,
    GetUserUseCase,
    CreateUserUseCase,
  ],
})
export class UseCasesModule {}
