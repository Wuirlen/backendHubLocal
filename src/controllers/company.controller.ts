import {
  Controller,
  Post,
  Body,
  Put,
  Delete,
  Get,
  Headers,
  Query,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { ApiResponse, ApiHeader, ApiTags, ApiOperation } from '@nestjs/swagger';

import { CreateCompanyDto, UpdateCompanyDto } from '@dtos';

import { CompanyUseCases } from '@company/company.use-cases';

@Controller('companies')
@ApiTags('Companies')
export class CompanyController {
  constructor(private companyUseCases: CompanyUseCases) {}

  @ApiOperation({ summary: 'List all companies'})
  @ApiHeader({ name: 'authorization', required: true, description: 'Bearer token' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Get('')
  getUserCompanies(
    @Query('itemsPerPage', ParseIntPipe) itemsPerPage: number,
    @Query('pageNumber', ParseIntPipe) pageNumber: number,
    @Headers('authorization') authorization: string,
  ) {
    const { userId } = JSON.parse(authorization);

    return this.companyUseCases.getUserCompanies({ itemsPerPage, pageNumber, userId });
  }

  @ApiOperation({ summary: 'Register a company'})
  @ApiHeader({ name: 'authorization', required: true, description: 'Bearer token' })
  @ApiResponse({ status: 409, description: 'Conflict' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 201, description: 'Created' })
  @Post()
  createCompany(
    @Body() createCompanyDto: Omit<CreateCompanyDto, 'userId'>,
    @Headers('authorization') authorization: string,
  ) {
    const { userId } = JSON.parse(authorization);

    return this.companyUseCases.createCompany({ ...createCompanyDto, userId });
  }

  @ApiOperation({ summary: 'Update company data'})
  @ApiHeader({ name: 'authorization', required: true, description: 'Bearer token' })
  @ApiResponse({ status: 409, description: 'Conflict' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Put()
  updateCompany(
    @Body() UpdateCompanyDto: Omit<UpdateCompanyDto, 'userId'>,
    @Headers('authorization') authorization: string,
  ) {
    const { userId } = JSON.parse(authorization);
    return this.companyUseCases.updateCompany({ ...UpdateCompanyDto, userId });
  }

  @ApiOperation({ summary: 'Delete company data'})
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 200, description: 'Success' })
  @Delete('/:companyId')
  deleteCompany(
    @Param('companyId', ParseIntPipe) companyId: number,
    @Headers('authorization') authorization: string,
  ) {
    const { userId } = JSON.parse(authorization);

    return this.companyUseCases.deleteCompany({ id: companyId, userId });
  }
}
