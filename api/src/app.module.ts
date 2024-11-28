import { Module } from '@nestjs/common'
import { ControllerModule } from './infra/controller/controller.module'
import { UseCasesModule } from './use-cases/use-cases.module'

@Module({
  imports: [ControllerModule, UseCasesModule],
})
export class AppModule {}
