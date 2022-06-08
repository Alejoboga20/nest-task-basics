import { Test } from '@nestjs/testing';
import { User } from 'src/auth/user.entity';

import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';

const mockTasksRespository = () => ({
  getTasks: jest.fn(),
});

const mockUser: User = {
  username: 'Test',
  id: 'testId',
  password: 'testPassword',
  tasks: [],
};

describe('TasksService', () => {
  let tasksService: TasksService;
  let tasksRepository;

  beforeEach(async () => {
    // initilize a NestJS module with tasksService and tasksRepository
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TasksRepository, useFactory: mockTasksRespository },
      ],
    }).compile();

    tasksService = module.get(TasksService);
    tasksRepository = module.get(TasksRepository);
  });

  describe('get tasks', () => {
    it('calls TasksRepository.getTasks and returns the result', async () => {
      expect(tasksRepository.getTasks).not.toHaveBeenCalled();
      tasksRepository.getTasks.mockResolvedValue([]);

      const tasks = await tasksService.getTasks(null, mockUser);
      expect(tasksRepository.getTasks).toHaveBeenCalled();
      expect(tasks).toEqual([]);
    });
  });
});
