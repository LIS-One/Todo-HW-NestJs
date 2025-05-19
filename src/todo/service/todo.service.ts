import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { NewTodoDto } from '../dto/NewTodoDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../model/todo.entity';
import { Repository } from 'typeorm';
import { UpdateTodoStatusDto } from '../dto/UpdateTodoStatusDto';
import { isNumber } from '@nestjs/common/utils/shared.utils';
import { TodoStatus } from '../enum/TodoStatus';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}
  create(todoDto: NewTodoDto) {
    const todo = this.todoRepository.create(todoDto);
    return this.todoRepository.save(todo);
  }

   update(id:number,updateTodoStatusDto:UpdateTodoStatusDto){
       return this.todoRepository.findOneBy({id})
      .then(todo=>{
        if(!todo){
          throw new NotFoundException(`Todo с id=${id} не найден`)
        }
        todo.status =  updateTodoStatusDto.status;
        return this.todoRepository.save(todo)
      });
  }

  async delete(id:number){
    const todo:Todo | null = await this.todoRepository.findOneBy({id});
    if(!todo){
      throw new NotFoundException(`Todo с id=${id} не найден`)
    }
    await this.todoRepository.delete({ id });
    return todo;
  }

  get(status: TodoStatus):Promise<Todo[]> {
    return this.todoRepository.findBy({status});
  }
}
