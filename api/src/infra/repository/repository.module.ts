import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { EnvConfigModule } from '../config/env-config.module'
import { PayableRepository } from '@/infra/repository/prisma/payable.repository'
import { AssignorRepository } from '@/infra/repository/prisma/assignor.repository'
import { UserRepository } from '@/infra/repository/prisma/user.repository'
import { CryptographyModule } from '@/infra/cryptography/cryptography.module'

@Module({
  imports: [EnvConfigModule],
  providers: [
    PrismaService,
    PayableRepository,
    AssignorRepository,
    UserRepository,
    CryptographyModule,
  ],
  exports: [
    PayableRepository,
    AssignorRepository,
    UserRepository,
    CryptographyModule,
  ],
})
export class RepositoryModule {}
