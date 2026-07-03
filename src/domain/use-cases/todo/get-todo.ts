import type { TodoEntiy } from "../../dtos/entities/todo.entity.js";
import type { TodoRepository } from "../../repositories/todo.repository.js";


    export interface GetTodoUseCase {
        execute(id:number ): Promise<TodoEntiy> 
    }

    export class GetTodo implements GetTodoUseCase {
        constructor(
            private readonly repository: TodoRepository
        ){}

        execute(id: number): Promise<TodoEntiy> {
            return this.repository.findById(id);
        }



    }