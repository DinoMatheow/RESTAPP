import type { Request, Response } from "express";
export declare class TodosController {
    constructor();
    getTodos: (req: Request, res: Response) => void;
    getTodoById: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    createTodo: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    updateTodo: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    deteleTodo: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
}
//# sourceMappingURL=controller.d.ts.map