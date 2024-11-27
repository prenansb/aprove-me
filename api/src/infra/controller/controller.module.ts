import { Module } from '@nestjs/common'

import { UseCasesModule } from '@/use-cases/use-cases.module'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from '../auth/auth.guard'
import { RepositoryModule } from '../repository/repository.module'

@Module({
  imports: [UseCasesModule, RepositoryModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class ControllerModule {}
