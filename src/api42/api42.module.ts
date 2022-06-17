import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Api42 } from './api42.entity';
import { Api42sController } from './api42s.controller';
import { Api42sService } from './api42.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Api42]) //entity를 던져줌.
  ] ,
  controllers: [Api42sController],
  providers: [Api42sService]
})
export class Api42sModule {}


