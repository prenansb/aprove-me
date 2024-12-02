import { CreateAssignorDto } from '@/infra/dtos/create-assignor.dto'
import { IdParamDto } from '@/infra/dtos/general.dto'
import { UpdateAssignorDto } from '@/infra/dtos/update-assignor.dto'
import { CreateAssignorUseCase } from '@/use-cases/integrations/create-assignor.use-case'
import { DeleteAssignorUseCase } from '@/use-cases/integrations/delete-assignor.use-case'
import { GetAssignorByIdUseCase } from '@/use-cases/integrations/get-assignor-by-id.use-case'
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
} from '@nestjs/common'
import {
  ApiBody,
  ApiOperation,
  ApiParam,
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
    private readonly updateAssignorUseCase: UpdateAssignorUseCase
  ) {}

  @Post('/create')
  @ApiOperation({ summary: 'Create Assignor' })
  @ApiResponse({ status: 201, description: 'Assignor created successfully.' })
  @ApiBody({ type: CreateAssignorDto })
  async create(@Body() data: CreateAssignorDto) {
    return await this.createAssignorUseCase.exec({ ...data })
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get Assignor By Id' })
  @ApiResponse({ status: 200, description: 'Assignor retrieved successfully.' })
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
  @ApiResponse({ status: 200, description: 'Assignor updated successfully.' })
  @ApiParam({ name: 'id', type: String, description: 'Assignor Id' })
  async update(@Param() { id }: IdParamDto, @Body() data: UpdateAssignorDto) {
    return await this.updateAssignorUseCase.exec({ id, data })
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete Assignor By Id' })
  @ApiResponse({ status: 200, description: 'Assignor deleted successfully.' })
  @ApiParam({ name: 'id', type: String, description: 'Assignor Id' })
  async delete(@Param() { id }: IdParamDto) {
    return await this.deleteAssignorUseCase.exec({ id })
  }
}
