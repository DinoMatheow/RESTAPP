import { Server } from '../presentation/server.js';

jest.mock('../presentation/server.js')

    describe('Should call server with arguments and start', ()=> {

        test('should work', async()=>{
        await import('../app.js')            
            expect(Server).toHaveBeenCalledTimes(1);
            expect(true).toBeTruthy();



        });

    });