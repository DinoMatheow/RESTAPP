import type { Request, Response } from "express";

export class TodosController {

    constructor() {

    }


    public getTodos = (req: Request, res: Response) => {
            res.json([  
                { id: 1, text: "Learn TypeScript", createdAt: new Date() },
                { id: 2, text: "Learn Javascript", createdAt: new Date() },
             ]);    



}


}