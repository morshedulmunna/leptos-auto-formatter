import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';

@Injectable()
export class QuestionService {
  constructor(private readonly prisma: PrismaClient) {}

  async create(createQuestionDto: any) {
    const { name, subCategoryId, option, ans } = createQuestionDto;

    const alreadyAdded = await this.prisma.question.findFirst({
      where: { name },
    });

    if (alreadyAdded?.name === name) {
      throw new NotAcceptableException('Qus already added change tittle.');
    }

    try {
      const question = await this.prisma.question.create({
        data: {
          name,
          subCategoryId,
          option,
          ans,
        },
        include: {
          sub_category: {
            select: {
              name: true,
            },
          },
        },
      });

      return question;
    } catch (error) {
      return {
        message: 'Something Internal Issue!',
        error: error,
      };
    }
  }

  async findAll() {
    try {
      return await this.prisma.question.findMany({
        include: {
          sub_category: true,
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
      return await this.prisma.question.findUnique({
        where: { id },
        include: {
          sub_category: true,
        },
      });
    } catch (error) {
      return {
        message: 'Something Internal Issue!',
        error: error,
      };
    }
  }

  async update(id: string, updateQuestionDto: any) {
    try {
      return await this.prisma.question.update({
        where: { id },
        data: {
          ...updateQuestionDto,
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
      await this.prisma.question.delete({
        where: { id },
      });
      return {
        message: 'Question Delete successfully!',
      };
    } catch (error) {
      return {
        message: 'Something Internal Issue!',
        error: error,
      };
    }
  }
}
