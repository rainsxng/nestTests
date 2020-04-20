import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cards')
export default class Card {
  @PrimaryColumn()
  number: string;
}