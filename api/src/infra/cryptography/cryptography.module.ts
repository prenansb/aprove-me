import { Module } from '@nestjs/common'
import { JwtEncrypter } from './jwt-encrypter'
import { BcryptHasher } from './bcrypt-hasher'

@Module({
  providers: [JwtEncrypter, BcryptHasher],
  exports: [JwtEncrypter, BcryptHasher],
})
export class CryptographyModule {}
