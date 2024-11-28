import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { EnvConfigModule } from '../config/env-config.module'
import { PayableRepository } from '@/infra/repository/prisma/payable.repository'
import { AssignorRepository } from '@/infra/repository/prisma/assignor.repository'

@Module({
  imports: [EnvConfigModule],
  providers: [PrismaService, PayableRepository, AssignorRepository],
  exports: [PayableRepository, AssignorRepository],
})
export class RepositoryModule {}
