import { Public } from '@/infra/auth/public'
import { AuthDto } from '@/infra/dtos/auth.dto'
import { CreateUserUseCase } from '@/use-cases/integrations/create-user.use-case'
import { GetUserUseCase } from '@/use-cases/integrations/get-user.use-case'
import { Body, Controller, Inject, Post } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('Auth')
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
  @ApiOperation({ summary: 'Authenticate User' })
  @ApiResponse({ status: 200, description: 'User Authenticated.' })
  @ApiBody({ type: AuthDto })
  async login(@Body() data: AuthDto) {
    return await this.getUserUseCase.exec(data)
  }

  @Public()
  @Post('/signup')
  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  @ApiBody({ type: AuthDto })
  async signup(@Body() data: AuthDto) {
    await this.createUserUseCase.exec(data)
  }
}
