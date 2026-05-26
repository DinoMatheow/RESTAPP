import 'dotenv/config';

import envVar from 'env-var';


export const envs = {
    PORT: envVar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envVar.get('PUBLIC_PATH').default('public').asString(),
}