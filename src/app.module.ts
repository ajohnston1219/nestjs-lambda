import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CounterModule } from './services/counter/counter.module';

@Module({
  imports: [CounterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
