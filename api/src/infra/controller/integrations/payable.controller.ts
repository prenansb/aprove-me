import { CreatePayableAndAssignorDto } from '@/infra/dtos/create-payable-and-assignor.dto'
import { CreatePayableDto } from '@/infra/dtos/create-payable.dto'
import { IdParamDto } from '@/infra/dtos/general.dto'
import { ListDto } from '@/infra/dtos/list.dto'
import { UpdatePayableDto } from '@/infra/dtos/update-payable.dto'
import { CreatePayableAndAssignorUseCase } from '@/use-cases/integrations/create-payable-and-assignor.use-case'
import { CreatePayableUseCase } from '@/use-cases/integrations/create-payable.use-case'
import { DeletePayableUseCase } from '@/use-cases/integrations/delete-payable.use-case'
import { GetPayableByIdUseCase } from '@/use-cases/integrations/get-payable-by-id.use-case'
import { ListAllPayablesUseCase } from '@/use-cases/integrations/list-all-payables.use-case'
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
  Query,
} from '@nestjs/common'
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'

@ApiTags('Payables')
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
    private readonly deletePayableUseCase: DeletePayableUseCase,
    @Inject(ListAllPayablesUseCase)
    private readonly listAllPayablesUseCase: ListAllPayablesUseCase
  ) {}

  @Post('/')
  @ApiOperation({ summary: 'Create Payable and Assignor' })
  @ApiResponse({
    status: 201,
    description: 'Payable and Assignor created successfully.',
  })
  @ApiBody({ type: CreatePayableAndAssignorDto })
  async createPayableAndAssignor(@Body() data: CreatePayableAndAssignorDto) {
    const { assignor, payable } = data

    await this.createPayableAndAssignorUseCase.exec({
      assignor,
      payable,
    })

    return { assignor, payable }
  }

  @Post('/create')
  @ApiOperation({ summary: 'Create Payable' })
  @ApiResponse({ status: 201, description: 'Payable created successfully.' })
  @ApiBody({ type: CreatePayableDto })
  async create(@Body() data: CreatePayableDto) {
    const payable = data

    return await this.createPayableUseCase.exec(payable)
  }

  @Get('/list')
  @ApiOperation({ summary: 'Get All Payables', operationId: 'listPayables' })
  @ApiQuery({ type: ListDto })
  @ApiResponse({
    status: 200,
    description: 'Payables retrieved successfully.',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              value: { type: 'number' },
              emissionDate: { type: 'string', format: 'date-time' },
              assignor: {
                type: 'object',
                properties: { name: { type: 'string' } },
              },
            },
          },
        },
        meta: {
          type: 'object',
          properties: {
            total: { type: 'number' },
            page: { type: 'number' },
            lastPage: { type: 'number' },
          },
        },
      },
    },
  })
  async listAll(@Query() query: ListDto) {
    try {
      const payable = await this.listAllPayablesUseCase.exec({
        page: query.page ? Number(query.page) : 1,
        limit: query.limit ? Number(query.limit) : 10,
      })
      return payable
    } catch (e) {
      return {
        message: e.message,
      }
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get Payable By Id' })
  @ApiResponse({ status: 200, description: 'Payable retrieved successfully.' })
  @ApiParam({ name: 'id', type: String, description: 'Payable Id' })
  async getById(@Param() { id }: IdParamDto) {
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
  @ApiOperation({ summary: 'Update Payable By Id' })
  @ApiResponse({ status: 200, description: 'Payable updated successfully.' })
  @ApiParam({ name: 'id', type: String, description: 'Payable Id' })
  async update(@Param() { id }: IdParamDto, @Body() data: UpdatePayableDto) {
    return await this.updatePayableUseCase.exec({ id, data })
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete Payable By Id' })
  @ApiResponse({ status: 200, description: 'Payable deleted successfully.' })
  @ApiParam({ name: 'id', type: String, description: 'Payable Id' })
  async delete(@Param() { id }: IdParamDto) {
    return await this.deletePayableUseCase.exec({ id })
  }
}
