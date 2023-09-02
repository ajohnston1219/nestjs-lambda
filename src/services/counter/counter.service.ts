import { Injectable } from '@nestjs/common';
import { CounterRepository } from './counter.repository';
import { Counter } from './entities/counter.entity';

@Injectable()
export class CounterService {
  constructor(private repository: CounterRepository) {}

  async increment(): Promise<Counter> {
    await this.repository.increment();
    return this.repository.getCounter();
  }

  async decrement(): Promise<Counter> {
    await this.repository.decrement();
    return this.repository.getCounter();
  }

  async getCounter(): Promise<Counter> {
    return this.repository.getCounter();
  }
}
