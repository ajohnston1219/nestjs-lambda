import { Controller, Get, Post } from '@nestjs/common';
import { CounterService } from './counter.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Counter } from './entities/counter.entity';

@ApiTags('counter')
@Controller('counter')
export class CounterController {
  constructor(private readonly counterService: CounterService) {}

  @Post('/increment')
  @ApiOkResponse({ description: 'New Counter', type: Counter })
  async increment(): Promise<Counter> {
    return this.counterService.increment();
  }

  @Post('/decrement')
  @ApiOkResponse({ description: 'New Counter', type: Counter })
  async decrement(): Promise<Counter> {
    return this.counterService.decrement();
  }

  @Get()
  @ApiOkResponse({ description: 'Current Counter', type: Counter })
  async getCounter() {
    return this.counterService.getCounter();
  }
}
