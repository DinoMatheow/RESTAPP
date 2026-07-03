import type { TodoEntiy } from "../../dtos/entities/todo.entity.js";
import type { UpdateTodoDto } from "../../dtos/todos/update-todo.dto.js";
import type { TodoRepository } from "../../repositories/todo.repository.js";


    export interface UpdateTodoUseCase {
        execute(dto: UpdateTodoDto): Promise<TodoEntiy> 
    }

    export class UpdateTodo implements UpdateTodoUseCase {
        constructor(
            private readonly repository: TodoRepository
        ){}

        execute(dto: UpdateTodoDto): Promise<TodoEntiy> {
            return this.repository.updateById(dto);
        }



    }