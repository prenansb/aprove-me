import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { EnvConfigModule } from '../config/env-config.module'
import { StampRequestsRepository } from './prisma/stamp-requests.repository'
import { StampRequestDocumentsRepository } from './prisma/stamp-request-documents.repository'
import { UsersRepository } from './prisma/users.repository'

@Module({
  imports: [EnvConfigModule],
  providers: [
    PrismaService,
    StampRequestsRepository,
    StampRequestDocumentsRepository,
    UsersRepository,
  ],
  exports: [
    StampRequestsRepository,
    StampRequestDocumentsRepository,
    UsersRepository,
  ],
})
export class RepositoryModule {}
