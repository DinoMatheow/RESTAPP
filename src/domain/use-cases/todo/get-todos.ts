import type { TodoEntiy } from "../../dtos/entities/todo.entity.js";
import type { TodoRepository } from "../../repositories/todo.repository.js";


    export interface GetTodosUseCases {
        execute(): Promise<TodoEntiy[]> 
    }

    export class GetTodos implements GetTodosUseCases {
        constructor(
            private readonly repository: TodoRepository
        ){}

        execute(): Promise<TodoEntiy[]> {
            return this.repository.getAll()
        }



    }