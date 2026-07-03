import type { TodoEntiy } from "../../dtos/entities/todo.entity.js";
import type { TodoRepository } from "../../repositories/todo.repository.js";


    export interface DeleteTodoUseCase {
        execute(id: number): Promise<TodoEntiy> 
    }

    export class DeleteTodo implements DeleteTodoUseCase {
        constructor(
            private readonly repository: TodoRepository
        ){}

        execute(id: number): Promise<TodoEntiy> {
            return this.repository.deleteById(id);
        }



    }