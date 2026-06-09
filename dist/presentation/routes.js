import { Router } from "express";
import { TodosController } from "./todos/controller.js";
import { TodoRoutes } from "./todos/routes.js";
export class AppRoutes {
    static get routes() {
        const router = Router();
        const todosController = new TodosController();
        router.use("/api/todos", TodoRoutes.routes);
        return router;
    }
}
//# sourceMappingURL=routes.js.map