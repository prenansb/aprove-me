import { Module } from '@nestjs/common'

import { UseCasesModule } from '@/use-cases/use-cases.module'
import { APP_GUARD } from '@nestjs/core'
import { RepositoryModule } from '../repository/repository.module'
import { PayableController } from '@/infra/controller/integrations/payable.controller'
import { AssignorController } from '@/infra/controller/integrations/assignor.controller'
import { AuthGuard } from '@/infra/auth/auth.guard'
import { AuthController } from '@/infra/controller/integrations/auth.controller'

@Module({
  imports: [UseCasesModule, RepositoryModule],
  controllers: [AssignorController, PayableController, AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class ControllerModule {}
