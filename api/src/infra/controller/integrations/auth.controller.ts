import { Public } from '@/infra/auth/public'
import { AuthDto } from '@/infra/dtos/auth.dto'
import { CreateUserUseCase } from '@/use-cases/integrations/create-user.use-case'
import { GetUserUseCase } from '@/use-cases/integrations/get-user.use-case'
import { Body, Controller, Inject, Post } from '@nestjs/common'

@Controller('/integrations/auth')
export class AuthController {
  constructor(
    @Inject(GetUserUseCase)
    private readonly getUserUseCase: GetUserUseCase,
    @Inject(CreateUserUseCase)
    private readonly createUserUseCase: CreateUserUseCase
  ) {}

  @Public()
  @Post('/login')
  async login(@Body() data: AuthDto) {
    return await this.getUserUseCase.exec(data)
  }

  @Public()
  @Post('/signup')
  async signup(@Body() data: AuthDto) {
    return await this.createUserUseCase.exec(data)
  }
}
