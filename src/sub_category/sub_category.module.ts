import { Module } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { SubCategoryController } from './sub_category.controller';
import { SubCategoryService } from './sub_category.service';

@Module({
  controllers: [SubCategoryController],
  providers: [SubCategoryService, PrismaClient],
})
export class SubCategoryModule {}
