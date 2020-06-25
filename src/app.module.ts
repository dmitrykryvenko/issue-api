import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { IssueModule } from 'modules/issue/issue.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { ConfigModule, ConfigService } from 'nestjs-config';

import { resolve } from 'path';

@Module({
  imports: [ConfigModule.load(resolve(__dirname, '**/*/!(*.d).config.{ts,js}'), {
    modifyConfigName: (name: string) => name.replace('.config', ''),
  }),
    MongooseModule.forRootAsync({ useFactory: () => ({ uri: 'mongodb://mongo:27017', debug: true,
        useNewUrlParser: true, useUnifiedTopology: true}) }),
    GraphQLModule.forRootAsync({
    useFactory: (config: ConfigService) => config.get('graphql'),
    inject: [ConfigService],
  }), IssueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {configure(consumer: MiddlewareConsumer) {
  consumer.apply().forRoutes('/graphql');
}}
