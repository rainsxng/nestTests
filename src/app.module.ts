import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Card from './card.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "test",
      "password": "test",
      "database": "test",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": false
    }),
    TypeOrmModule.forFeature([Card])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
