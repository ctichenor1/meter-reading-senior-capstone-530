import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../interfaces/register.interface';
import { ConnectionService } from './connection-services';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
        constructor(
            public http: HttpClient,
            public connectionService: ConnectionService
        ) {
            
        }

        public register(registerModel: Register): Observable<any> {
            return this.http.post(`${this.connectionService.api}/mobile/Register`, registerModel)
                .map((res: Response) => {
                    return res;
                })
                .catch((err: any) => {
                    return Observable.throw(err);
                });
            }

            // public login(loginModel: Login): Observable<any> {
            //     return this.http.post(`${this.connectionService.api}/mobile/Login`, loginModel)
            //         .map((res: Response) => {
            //             return res;
            //         })
            //         .catch((err: any) => {
            //             return Observable.throw(err);
            //         });
            //     }
                
}