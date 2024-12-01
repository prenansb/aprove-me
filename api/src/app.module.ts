import { Module } from '@nestjs/common'
import { ControllerModule } from './infra/controller/controller.module'
import { UseCasesModule } from './use-cases/use-cases.module'
import { AuthModule } from '@/infra/auth/auth.module'

@Module({
  imports: [ControllerModule, UseCasesModule, AuthModule],
})
export class AppModule {}
