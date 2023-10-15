import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaClient) {}

  async CategoryCreate(createCategoryDto: any) {
    const { name, description } = createCategoryDto;

    const alreadyAdded = await this.prisma.category.findFirst({
      where: { name },
    });

    if (alreadyAdded?.name === name) {
      throw new NotAcceptableException('Category Already Added.');
    }

    try {
      const category = await this.prisma.category.create({
        data: {
          name,
          description,
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
      return await this.prisma.category.findMany({
        include: {
          SubCategory: true,
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
      return await this.prisma.category.findUnique({
        where: { id },
        include: {
          SubCategory: true,
        },
      });
    } catch (error) {
      return {
        message: 'Something Internal Issue!',
        error: error,
      };
    }
  }

  async update(id: string, updateCategoryDto: any) {
    try {
      return await this.prisma.category.update({
        where: { id },
        data: {
          ...updateCategoryDto,
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
      return await this.prisma.category.delete({
        where: { id },
      });
    } catch (error) {
      return {
        message: 'Something Internal Issue!',
        error: error,
      };
    }
  }
}
