import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssueModule } from './modules/issue/issue.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [TypegooseModule.forRoot('mongodb://mongo:27017', {useNewUrlParser: true,
    useUnifiedTopology: true}), IssueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
