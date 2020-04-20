import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Card from './card.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {


  constructor(
    @InjectRepository(Card)
    private readonly cards: Repository<Card>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getCards() {
    return this.cards.find();
  }

  findCard(number: string) {
    return this.cards.findOne({
      number
    });
  }
}
