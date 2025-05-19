import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TodoStatus } from '../enum/TodoStatus';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column({
    type: 'simple-enum',
    enum: TodoStatus,
    default: TodoStatus.IN_PROGRESS
  })
  status:TodoStatus
}
