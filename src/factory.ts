import { Repository } from 'typeorm';

export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};

export const repositoryMockFactory: jest.Mock<{ findOne: jest.Mock<any, [undefined]> }, any[]> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
}));