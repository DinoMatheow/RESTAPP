import { Router } from "express";
import { TodosController } from "./controller.js";

export class TodoRoutes{
    
    static get routes(): Router{

        const router = Router();
        const todosController = new TodosController();
        router.get("/", todosController.getTodos);
        

        return router;

    }



}