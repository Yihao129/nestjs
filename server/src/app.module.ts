import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commands/';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [
    AppService,
    ...CommandHandlers,
    ...QueryHandlers
  ],
})
export class AppModule {}
