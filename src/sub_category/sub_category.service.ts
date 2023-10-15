import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';

@Injectable()
export class SubCategoryService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createSubCategoryDto: any) {
    const { name, categoryId } = createSubCategoryDto;

    const alreadyAdded = await this.prisma.subCategory.findFirst({
      where: { name },
    });

    if (alreadyAdded?.name === name) {
      throw new NotAcceptableException('Sub Category Already Added.');
    }

    try {
      const category = await this.prisma.subCategory.create({
        data: {
          name,
          categoryId,
        },
        include: {
          category: true,
        },
      });

      return category;
    } catch (error) {
      return {
        message: 'Something Internal Issue!',
        error: error,
      };
    }
  }

  async findAll() {
    try {
      return await this.prisma.subCategory.findMany({
        include: {
          Question: true,
        },
      });
    } catch (error) {
      return {
        message: 'Something Internal Issue!',
        error: error,
      };
    }
  }

  async findOne(id: string) {
    try {
      return await this.prisma.subCategory.findUnique({
        where: { id },
        include: {
          Question: true,
        },
      });
    } catch (error) {
      return {
        message: 'Something Internal Issue!',
        error: error,
      };
    }
  }

  async update(id: string, updateSubCategoryDto: any) {
    try {
      return await this.prisma.subCategory.update({
        where: { id },
        data: {
          ...updateSubCategoryDto,
        },
      });
    } catch (error) {
      return {
        message: 'Something Internal Issue!',
        error: error,
      };
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.subCategory.delete({
        where: { id },
      });
      return {
        message: ' Sub Category Delete successfully!',
      };
    } catch (error) {
      return {
        message: 'Something Internal Issue!',
        error: error,
      };
    }
  }
}
