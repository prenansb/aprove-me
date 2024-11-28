import { Module } from '@nestjs/common'

import { UseCasesModule } from '@/use-cases/use-cases.module'
import { APP_GUARD } from '@nestjs/core'
// import { AuthGuard } from '../auth/auth.guard'
import { RepositoryModule } from '../repository/repository.module'
import { PayableController } from '@/infra/controller/integrations/payable.controller'
import { AssignorController } from '@/infra/controller/integrations/assignor.controller'

@Module({
  imports: [UseCasesModule, RepositoryModule],
  controllers: [AssignorController, PayableController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
})
export class ControllerModule {}
