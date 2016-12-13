import {Injectable} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer'

import { IUser } from './userList/IUser';

@Injectable()
export class AdminService {
    rhashcode = /\d\.\d{4}/;

    constructor() {}

    /* UUID http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript */
    makeHashCode(prefix: string = '60sky') {
        return String(Math.random() + Math.random()).replace(this.rhashcode, prefix);
    }

    getUserList(): Observable<Array<IUser>> {
        let userList = [];
        for(let i = 0; i < 10; ++i) {
            let id = this.makeHashCode();
            userList.push({
                id: id,
                name: `小撸-${id}`
            });
        }

        return Observable.create((observer: Observer<Array<IUser>>) => {
            observer.next(userList);
            observer.complete();

            return () => {};
        });
    }
}