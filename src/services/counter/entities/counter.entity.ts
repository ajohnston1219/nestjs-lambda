import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class Counter {
  constructor(value: number) {
    this.value = value;
  }

  @ApiProperty({
    description: 'Current value of the counter',
    example: 69,
  })
  @IsNumber()
  value: number;
}
