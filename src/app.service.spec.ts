import { Repository } from 'typeorm';
import Card from './card.entity';
import { MockType, repositoryMockFactory } from './factory';
import { AppService } from './app.service';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UserService', () => {
  let service: AppService;
  let repositoryMock: MockType<Repository<Card>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        // Provide your mock instead of the actual repository
        { provide: getRepositoryToken(Card), useFactory: repositoryMockFactory },
      ],
    }).compile();
    service = module.get<AppService>(AppService);
    repositoryMock = module.get(getRepositoryToken(Card));
  });

  it('should find a user', async () => {
    const card = {number: '1'};
    // Now you can control the return value of your mock's methods
    repositoryMock.findOne.mockReturnValue(card);
    expect(service.findCard(card.number)).toEqual(card);
    // And make assertions on how often and with what params your mock's methods are called
    expect(repositoryMock.findOne).toHaveBeenCalledWith({ number: card.number });
  });
});