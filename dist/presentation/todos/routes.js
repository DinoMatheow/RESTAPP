import { Router } from "express";
import { TodosController } from "./controller.js";
export class TodoRoutes {
    static get routes() {
        const router = Router();
        const todosController = new TodosController();
        router.get("/", todosController.getTodos);
        router.get("/:id", todosController.getTodoById);
        router.post("/", todosController.createTodo);
        router.put("/:id", todosController.updateTodo);
        router.delete("/:id", todosController.deteleTodo);
        return router;
    }
}
//# sourceMappingURL=routes.js.map