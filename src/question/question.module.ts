import { Module } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, PrismaClient],
})
export class QuestionModule {}
