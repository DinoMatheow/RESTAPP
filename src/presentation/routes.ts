import { Router } from "express";
import { TodosController } from "./todos/controller.js";

export class AppRoutes{
    
    static get routes(): Router{

        const router = Router();
        const todosController = new TodosController();
        router.get("/todos", todosController.getTodos);


        return router;

    }



}