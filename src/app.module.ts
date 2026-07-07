import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './common/error/filters/global-exception.filter';
import { HttpExceptionFilter } from './common/error/filters/http-exception.filter';
import { ConfigModule } from '@nestjs/config';
import { AppLoggerModule } from './common/logger/app-logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AppLoggerModule
  ],
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
