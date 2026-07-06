import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './common/error/filters/global-exception.filter';
import { HttpExceptionFilter } from './common/error/filters/http-exception.filter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, 
    {
      provide: APP_FILTER, 
      useClass: GlobalExceptionFilter
    },
    {
      provide: APP_FILTER, 
      useClass: HttpExceptionFilter
    }
  ],
})
export class AppModule {}
