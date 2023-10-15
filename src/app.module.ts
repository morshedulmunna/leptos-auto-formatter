import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub_category/sub_category.module';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [CategoryModule, SubCategoryModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
