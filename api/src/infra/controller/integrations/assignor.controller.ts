import { CreateAssignorDto } from '@/infra/dtos/create-assignor.dto'
import { IdParamDto } from '@/infra/dtos/general.dto'
import { ListDto } from '@/infra/dtos/list.dto'
import { UpdateAssignorDto } from '@/infra/dtos/update-assignor.dto'
import { CreateAssignorUseCase } from '@/use-cases/integrations/create-assignor.use-case'
import { DeleteAssignorUseCase } from '@/use-cases/integrations/delete-assignor.use-case'
import { GetAssignorByIdUseCase } from '@/use-cases/integrations/get-assignor-by-id.use-case'
import { ListAllAssignorsUseCase } from '@/use-cases/integrations/list-all-assignors.use-case'
import { UpdateAssignorUseCase } from '@/use-cases/integrations/update-assignor.use-case'
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

@ApiTags('Assignors')
@Controller('/integrations/assignor')
export class AssignorController {
  constructor(
    @Inject(CreateAssignorUseCase)
    private readonly createAssignorUseCase: CreateAssignorUseCase,
    @Inject(GetAssignorByIdUseCase)
    private readonly getAssignorByIdUseCase: GetAssignorByIdUseCase,
    @Inject(DeleteAssignorUseCase)
    private readonly deleteAssignorUseCase: DeleteAssignorUseCase,
    @Inject(UpdateAssignorUseCase)
    private readonly updateAssignorUseCase: UpdateAssignorUseCase,
    @Inject(ListAllAssignorsUseCase)
    private readonly listAllAssignorsUseCase: ListAllAssignorsUseCase
  ) {}

  @Post('/create')
  @ApiOperation({ summary: 'Create Assignor' })
  @ApiResponse({
    status: 201,
    description: 'Assignor created successfully.',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        document: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
        name: { type: 'string' },
      },
    },
  })
  @ApiBody({ type: CreateAssignorDto })
  async create(@Body() data: CreateAssignorDto) {
    return await this.createAssignorUseCase.exec({ ...data })
  }

  @Get('/list')
  @ApiOperation({ summary: 'Get All Assignors', operationId: 'listAssignors' })
  @ApiQuery({ type: ListDto })
  @ApiResponse({
    status: 200,
    description: 'Assignors retrieved successfully.',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              document: { type: 'string' },
              email: { type: 'string' },
              phone: { type: 'string' },
              name: { type: 'string' },
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
      const assignor = await this.listAllAssignorsUseCase.exec({
        page: query.page ? Number(query.page) : 1,
        limit: query.limit ? Number(query.limit) : 10,
      })

      return assignor
    } catch (e) {
      return {
        message: e.message,
      }
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get Assignor By Id' })
  @ApiResponse({
    status: 200,
    description: 'Assignor retrieved successfully.',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        document: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
        name: { type: 'string' },
      },
    },
  })
  @ApiParam({ name: 'id', type: String, description: 'Assignor Id' })
  async getById(@Param() { id }: IdParamDto) {
    try {
      const assignor = await this.getAssignorByIdUseCase.exec({ id })
      return assignor
    } catch (e) {
      return {
        message: e.message,
      }
    }
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update Assignor By Id' })
  @ApiResponse({
    status: 200,
    description: 'Assignor updated successfully.',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        document: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
        name: { type: 'string' },
      },
    },
  })
  @ApiParam({ name: 'id', type: String, description: 'Assignor Id' })
  async update(@Param() { id }: IdParamDto, @Body() data: UpdateAssignorDto) {
    return await this.updateAssignorUseCase.exec({ id, data })
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete Assignor By Id' })
  @ApiResponse({
    status: 200,
    description: 'Assignor deleted successfully.',
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        document: { type: 'string' },
        email: { type: 'string' },
        phone: { type: 'string' },
        name: { type: 'string' },
      },
    },
  })
  @ApiParam({ name: 'id', type: String, description: 'Assignor Id' })
  async delete(@Param() { id }: IdParamDto) {
    return await this.deleteAssignorUseCase.exec({ id })
  }
}
