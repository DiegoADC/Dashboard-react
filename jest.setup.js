// En caso de necesitar la implementación del FetchAPI
// yarn add -D whatwg-fetch
import 'whatwg-fetch'; 

// En caso de encontrar paquetes que lo requieran 
// yarn add -D setimmediate
// import 'setimmediate';


require('dotenv').config({
    path: '.env'
});


jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({ ...process.env })
}));


