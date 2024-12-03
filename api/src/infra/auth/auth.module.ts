import { env } from '@/infra/config/env'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: env.jwt_secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
})
export class AuthModule {}
