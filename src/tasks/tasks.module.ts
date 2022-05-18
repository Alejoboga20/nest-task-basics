import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])], // Makes TasksRepository available via dependency injection
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
