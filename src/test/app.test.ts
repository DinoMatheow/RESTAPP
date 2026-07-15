import { envs } from '../config/envs.js';
import { Server } from '../presentation/server.js';

jest.mock('../presentation/server.js')

    describe('Should call server with arguments and start', ()=> {

        test('should work', async()=>{
        await import('../app.js')            
            expect(Server).toHaveBeenCalledTimes(1);
            expect(Server).toHaveBeenCalledWith({
                port: envs.PORT,
                public_path: envs.PUBLIC_PATH,
                routes: expect.any(Function),
            });
            expect(Server.prototype.start).toHaveBeenCalledWith()
        });

    }); 