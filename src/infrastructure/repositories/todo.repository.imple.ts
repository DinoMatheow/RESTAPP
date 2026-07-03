import type { TodoDatasource } from "../../domain/datasources/todo.datasource.js";
import type { TodoEntiy } from "../../domain/dtos/entities/todo.entity.js";
import type { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto.js";
import type { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto.js";
import type { TodoRepository } from "../../domain/repositories/todo.repository.js";

export class TodoRepositoryImple implements TodoRepository{
    constructor(
        private readonly datasource: TodoDatasource,
    ){}


    create(createTodoDto: CreateTodoDto): Promise<TodoEntiy> {
        return this.datasource.create(createTodoDto);
    }
    getAll(): Promise<TodoEntiy[]> {
        return this.datasource.getAll();
    }
    findById(id: number): Promise<TodoEntiy> {
        return this.datasource.findById(id);
    }
    updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntiy> {
        return this.datasource.updateById( updateTodoDto );
    }
    deleteById(id: number): Promise<TodoEntiy> {
        return this.datasource.deleteById( id );
    }
}