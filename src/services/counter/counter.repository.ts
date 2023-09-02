import { Injectable } from '@nestjs/common';
import { Counter } from './entities/counter.entity';

let counter = new Counter(0);

@Injectable()
export class CounterRepository {
  async increment(): Promise<void> {
    counter.value += 1;
  }

  async decrement(): Promise<void> {
    counter.value -= 1;
  }

  async getCounter(): Promise<Counter> {
    return counter;
  }
}
