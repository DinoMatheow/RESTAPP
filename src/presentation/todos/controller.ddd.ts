import type { Request, Response } from "express";
import { prisma } from "../../data/postgres/index.js";
import { error } from "console";
import { CreateTodoDto } from "../../domain/dtos/todos/create-todo.dto.js";
import { UpdateTodoDto } from "../../domain/dtos/todos/update-todo.dto.js";
import type { TodoRepository } from "../../domain/repositories/todo.repository.js";


// const todos = [
//         { id: 1, text: "Learn TypeScript", createdAt: new Date() },
//         { id: 2, text: "Learn Javascript", createdAt: null },
// ]


export class TodosController {

    constructor(
        private readonly todoRepository: TodoRepository,
    ) {}


    public getTodos = async(req: Request, res: Response) => {
    // const todos = await prisma.todo.findMany();         
        // res.json(todos);    
    const todos = await this.todoRepository.getAll();
    return res.json(todos);
    }


    public getTodoById = async( req:Request , res:Response ) =>{
        const id = +req.params.id!;


        // if ( isNaN(id) ) return res.status(400).json({error: `ID argument is not a number`});

        // const todo = await prisma.todo.findFirst({
            // where: {id}
        // });
        // const todo = todos.find( todo => todo.id === id );

        // ( todo )
        // ? res.json(todo)
        // : res.status(404).json({ error: `Todo with id ${id} not found` })
        // res.json(todo);
        try {
            const todo = await this.todoRepository.findById(id);
            res.json(todo);
        } catch (error) {
            res.status(400).json({error});
        }
        

    }

    public createTodo = async(req: Request, res:Response)=>{
        // const { text } = req.body;
        const [ error, createTodoDto ] = CreateTodoDto.create(req.body);
        if ( error ) return res.status(400).json({ error });
        // if(!text) return res.status(400).json({ error: "Text property is required" });
       
        const todo = await this.todoRepository.create( createTodoDto! );

        // const todo = await prisma.todo.create({
        //     data: createTodoDto!
        // });

            // const newTodo = {
            //     id: todos.length + 1,
            //     text:text,
            //     createdAt: new Date()
            // };

        // todos.push( newTodo )
        res.json(todo)
    }


    public updateTodo = async(req:Request, res: Response) =>{
        const id = +req.params.id!;

        const [error, updateTodoDto] = UpdateTodoDto.create({
            ...req.body, id
        });
        // const { text, completed } =  req.body;
        
        if ( error ) return res.status(400).json({error});
        // if ( isNaN(id) ) return res.status(400).json({error: `ID argument is not a number`});
        

        // const todo = await prisma.todo.findFirst({
        //     where: {id}
        // });
        // const todo = todos.find( todo => todo.id === id );
        // if ( !todo ) return res.status(404).json({error: `Todo with id ${id} not found`});

        // if(!text) return res.status(400).json({ error: "Text property is required" });
        // todo.text = text || todo.text;
        // ( createdAt === "null") 
        // ? todo.createdAt = null 
        // : todo.createdAt = new Date( createdAt || todo.createdAt ) 

        // const updateTodo = await prisma.todo.update({
        //     where: {id},
        //     data: updateTodoDto!.values
        // });
        const updateTodo = await this.todoRepository.updateById( updateTodoDto! );

        res.json(updateTodo);


    }

    public deteleTodo = async(req:Request, res: Response) =>{
        
        const id = +req.params.id!;
        
        // const todo = todos.find( todo => todo.id === id );
    //    const todo = await prisma.todo.findFirst({
    //         where: {id}
    //     });

        // if ( !todo ) return res.status(404).json({error: `Todo with id ${id} not found`});

        // todos.splice( todos.indexOf(todo), 1 )

        // const deleted = await prisma.todo.delete({
        //     where: {id}
        // });
        // ( deleted )
        // ? res.json( deleted )
        // : res.status(400).json({ error: `Todo with id ${id} not found`  })

        // res.json({todo, deleted});

        const deletedTodo = await this.todoRepository.deleteById(id);

        res.json(deletedTodo);

    }





}