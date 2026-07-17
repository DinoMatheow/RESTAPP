import { prisma } from "../../data/postgres/index.js";
import type { TodoDatasource } from "../../domain/datasources/todo.datasource.js";
import { TodoEntiy } from "../../domain/dtos/entities/todo.entity.js";
import type { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto.js";
import type { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto.js";
import { CustomError } from "../../domain/errors/custom.error.js";

export class TodoDatasourceImple implements TodoDatasource {
    async create(createTodoDto: CreateTodoDto): Promise<TodoEntiy> {
       const todo = await prisma.todo.create({
            data: createTodoDto!
        });
        return TodoEntiy.fromObject( todo ); 
    }
    async getAll():  Promise<TodoEntiy[]> {
        const todos = await prisma.todo.findMany();  
        return todos.map(
        todo => TodoEntiy.fromObject(todo)
        );       
        
    }
    async findById(id: number): Promise<TodoEntiy> {
          const todo = await prisma.todo.findFirst({
            where: {id}
        });
        if(!todo) throw new CustomError( `Todo with id ${id} not found`, 404);

        return TodoEntiy.fromObject(todo);
    }

    async updateById(updateTodoDto: UpdateTodoDto): Promise<TodoEntiy> {
        await this.findById( updateTodoDto.id );
        const updateTodo = await prisma.todo.update({
            where: {id: updateTodoDto.id},
            data: updateTodoDto!.values
        });
        return TodoEntiy.fromObject(updateTodo);
    }
    async deleteById(id: number): Promise<TodoEntiy> {
        await this.findById( id );
        const deleted = await prisma.todo.delete({
            where: {id}
        });

        return TodoEntiy.fromObject( deleted );

    }

}