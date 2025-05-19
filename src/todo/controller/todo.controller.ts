import { Body, Controller, Delete, Get, Param, ParseEnumPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { NewTodoDto } from '../dto/NewTodoDto';
import { TodoDto } from '../dto/TodoDto';
import { TodoStatus } from '../enum/TodoStatus';
import { UpdateTodoStatusDto } from '../dto/UpdateTodoStatusDto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() todoDto: NewTodoDto) {
    return this.todoService.create(todoDto);
  }
  @Patch(':id')
  updateTodo(@Param('id') id: number,@Body() updateTodoStatusDto:UpdateTodoStatusDto): Promise<TodoDto>{
      return this.todoService.update(id,updateTodoStatusDto);
  }
  @Delete(':id')
  deleteTodo(@Param('id')id:number):  Promise<TodoDto>{
    return this.todoService.delete(id);
  }
  @Get()
  findTodosByStatus(@Query('status', new ParseEnumPipe(TodoStatus)) status: TodoStatus):Promise<TodoDto[]>{
    return this.todoService.get(status);
  }
}
