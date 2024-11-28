import type {
  CreatePayableDto,
  PayableDto,
} from '@/infra/dtos/create-payable.dto'
import type { IdParamDto } from '@/infra/dtos/general.dto'
import type { UpdatePayableDto } from '@/infra/dtos/update-payable.dto'
import { CreatePayableAndAssignorUseCase } from '@/use-cases/integrations/create-payable-and-assignor.use-case'
import { CreatePayableUseCase } from '@/use-cases/integrations/create-payable.use-case'
import { DeletePayableUseCase } from '@/use-cases/integrations/delete-payable.use-case'
import { GetPayableByIdUseCase } from '@/use-cases/integrations/get-payable-by-id.use-case'
import { UpdatePayableUseCase } from '@/use-cases/integrations/update-payable.use-case'
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common'

@Controller('/integrations/payable')
export class PayableController {
  constructor(
    @Inject(CreatePayableAndAssignorUseCase)
    private readonly createPayableAndAssignorUseCase: CreatePayableAndAssignorUseCase,
    @Inject(CreatePayableUseCase)
    private readonly createPayableUseCase: CreatePayableUseCase,
    @Inject(GetPayableByIdUseCase)
    private readonly getPayableByIdUseCase: GetPayableByIdUseCase,
    @Inject(UpdatePayableUseCase)
    private readonly updatePayableUseCase: UpdatePayableUseCase,
    @Inject(DeletePayableUseCase)
    private readonly deletePayableUseCase: DeletePayableUseCase
  ) {}

  @Post('/')
  async createPayableAndAssignor(@Body() data: CreatePayableDto) {
    const { assignor, payable } = data

    await this.createPayableAndAssignorUseCase.exec({
      assignor,
      payable,
    })

    return { assignor, payable }
  }

  @Post('/create')
  async create(@Body() data: PayableDto) {
    const payable = data

    await this.createPayableUseCase.exec(payable)

    return payable
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    try {
      const payable = await this.getPayableByIdUseCase.exec({
        id,
      })

      return payable
    } catch (e) {
      return {
        message: e.message,
      }
    }
  }

  @Put('/:id')
  async update(@Param() { id }: IdParamDto, @Body() data: UpdatePayableDto) {
    return await this.updatePayableUseCase.exec({ id, data })
  }

  @Delete('/:id')
  async delete(@Param() { id }: IdParamDto) {
    return await this.deletePayableUseCase.exec({ id })
  }
}
