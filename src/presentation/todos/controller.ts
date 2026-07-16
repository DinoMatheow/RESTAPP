import type { Request, Response } from "express";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto.js";
import { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto.js";
import type { TodoRepository } from "../../domain/repositories/todo.repository.js";
import { CreateTodo, DeleteTodo, GetTodo, GetTodos, UpdateTodo } from "../../domain/use-cases/index.js";


// const todos = [
//         { id: 1, text: "Learn TypeScript", createdAt: new Date() },
//         { id: 2, text: "Learn Javascript", createdAt: null },
// ]


export class TodosController {

    constructor(
        private readonly todoRepository: TodoRepository,
    ) {}


    public getTodos = (req: Request, res: Response) => {
        new GetTodos( this.todoRepository )
        .execute()
        .then( todos => res.json(todos))
        .catch(error => res.status(400).json({error}));
    }


    public getTodoById = ( req:Request , res:Response ) =>{
        const id = +req.params.id!;
        new GetTodo( this.todoRepository )
        .execute(id)
        .then(todo => res.json(todo))
        .catch( error =>res.status(400).json({error}) );

    }

    public createTodo = (req: Request, res:Response)=>{
        const [ error, createTodoDto ] = CreateTodoDto.create(req.body);
        if ( error ) return res.status(400).json({ error });
        
        new CreateTodo( this.todoRepository )
        .execute( createTodoDto! )
        .then(todo => res.status(201).json(todo))
        .catch( error => res.status(400).json({error}));

    }


    public updateTodo = (req:Request, res: Response) =>{
        const id = +req.params.id!;

        const [error, updateTodoDto] = UpdateTodoDto.create({
            ...req.body, id
        });
        if ( error ) return res.status(400).json({error});

         new UpdateTodo( this.todoRepository )
        .execute( updateTodoDto! )
        .then(todo => res.json(todo))
        .catch( error => res.status(400).json({error}));
    }

    public deteleTodo = (req:Request, res: Response) =>{
        
        const id = +req.params.id!;
        new DeleteTodo( this.todoRepository )
        .execute(id)
        .then(todo => res.json(todo))
        .catch( error =>res.status(400).json({error}) );
     

    }





}