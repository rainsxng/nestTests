import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import Card from './card.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/abc')
   someRequest() {
    return this.appService.getCards();
  }
}
