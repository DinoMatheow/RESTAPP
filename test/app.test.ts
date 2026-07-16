import { envs } from '../src/config/envs.js';
import { Server } from '../src/presentation/server.js';

jest.mock('../src/presentation/server');

    describe('Should call server with arguments and start', ()=> {

        test('should work', async()=>{
        await import('../src/app.js')            
            expect(Server).toHaveBeenCalledTimes(1);
            expect(Server).toHaveBeenCalledWith({
                port: envs.PORT,
                public_path: envs.PUBLIC_PATH,
                routes: expect.any(Function),
            });
            expect(Server.prototype.start).toHaveBeenCalledWith()
        });

    }); 