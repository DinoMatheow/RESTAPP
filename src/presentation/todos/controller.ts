import type { Request, Response } from "express";


const todos = [
        { id: 1, text: "Learn TypeScript", createdAt: new Date() },
        { id: 2, text: "Learn Javascript", createdAt: new Date() },
]


export class TodosController {

    constructor() {

    }


    public getTodos = (req: Request, res: Response) => {
            res.json(todos);    
}

    public getTodoById = ( req:Request , res:Response ) =>{
        const id = +req.params.id!;


        if ( isNaN(id) ) return res.status(400).json({error: `ID argument is not a number`});


        const todo = todos.find( todo => todo.id === id );

        ( todo )
        ? res.json(todo)
        : res.status(404).json({ error: `Todo with id ${id} not found` })


        // res.json(todo);
    }



}