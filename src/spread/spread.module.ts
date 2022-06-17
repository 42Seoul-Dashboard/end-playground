import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spread } from './spread.entity';
import { SpreadsController } from './spreads.controller';
import { SpreadsService } from './spreads.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Spread]) //entity를 던져줌.
  ] ,
  controllers: [SpreadsController],
  providers: [SpreadsService]
})
export class SpreadsModule {}



