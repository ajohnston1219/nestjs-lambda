import { Module } from '@nestjs/common';
import { CounterService } from './counter.service';
import { CounterController } from './counter.controller';
import { CounterRepository } from './counter.repository';

@Module({
  controllers: [CounterController],
  providers: [CounterRepository, CounterService],
})
export class CounterModule {}
