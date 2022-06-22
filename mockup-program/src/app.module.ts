import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Api42sModule } from './api42/api42.module';
import { typeORMConfig } from './config/typeorm.config';
import { SpreadsModule } from './spread/spread.module';

@Module({
  imports: [ TypeOrmModule.forRoot(typeORMConfig),
    SpreadsModule, Api42sModule ]
})
export class AppModule {}
