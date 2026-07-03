import type { TodoEntiy } from "../dtos/entities/todo.entity.js";
import type { CreateTodoDto } from "../dtos/todos/create-todo.dto.js";
import type { UpdateTodoDto } from "../dtos/todos/update-todo.dto.js";


export abstract class TodoDatasource{
    abstract create( createTodoDto: CreateTodoDto ): Promise<TodoEntiy>;
    
    abstract getAll(  ): Promise<TodoEntiy[]>;

    abstract findById( id: number ): Promise<TodoEntiy>;

    abstract updateById(  updateTodoDto:UpdateTodoDto ): Promise<TodoEntiy>;

    abstract deleteById( id: number ): Promise<TodoEntiy>;


}