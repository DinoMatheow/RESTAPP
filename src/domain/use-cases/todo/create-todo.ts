import type { TodoEntiy } from "../../dtos/entities/todo.entity.js";
import type { CreateTodoDto } from "../../dtos/todos/create-todo.dto.js";
import type { TodoRepository } from "../../repositories/todo.repository.js";


    export interface CreateTodoUseCase {
        execute(dto: CreateTodoDto): Promise<TodoEntiy> 
    }

    export class CreateTodo implements CreateTodoUseCase {
        constructor(
            private readonly repository: TodoRepository
        ){}

        execute(dto: CreateTodoDto): Promise<TodoEntiy> {
            return this.repository.create(dto);
        }

        

    }