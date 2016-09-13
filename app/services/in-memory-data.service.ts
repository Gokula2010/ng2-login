import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { User, Role, Hero } from '../models/user';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let roles = [
            { id: 1, name: 'admin' },
            { id: 2, name: 'engineer' }
        ];

        let users = [
            { id: 1, username: 'gokul', firstname:'Gokul', lastname: 'Ranga', password: 'gokul', role_id: 1 },
            { id: 2, username: 'test', firstname:'Test', lastname: 'Test', password: 'test', role_id: 2 }
        ];
        let heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { 
            roles,
            users,
            heroes
        };

        // return {
        //     roles,
        //     users
        // };



    }
}
