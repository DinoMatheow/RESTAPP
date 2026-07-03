import { TodoDatasourceImple } from "../../infrastructure/datasource/todo.datasource.imple.js";
import { TodoRepositoryImple } from "../../infrastructure/repositories/todo.repository.imple.js";
import { TodosController } from "./controller.js";
import { Router } from "express";

export class TodoRoutes{
    
    static get routes(): Router{

        const router = Router();
        const datasource = new TodoDatasourceImple();
        const todoRepository = new TodoRepositoryImple( datasource );

        const todosController = new TodosController(todoRepository);
        router.get("/", todosController.getTodos);
        router.get("/:id", todosController.getTodoById);
        router.post("/", todosController.createTodo);
        router.put("/:id", todosController.updateTodo);
        router.delete("/:id", todosController.deteleTodo);



        

        return router;

    }



}