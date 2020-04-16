import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPage }  from '../login/login.page';
import { Register } from '../interfaces/register.interfaces';
import { ConnectionService } from './connection-services';
import { Observable } from 'rxjs';
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
            return this.http.post(`${this.connectionService.api}/mobile/Auth/Register`, registerModel)
                .map((res: Response) => {
                    return res;
                })
                .catch((err: any) => {
                    return Observable.throw(err);
                });
            }

        public login(loginModel: LoginPage): Observable<any> {
                return this.http.post(`${this.connectionService.api}/mobile/Login`, loginModel)
                    .map((res: Response) => {
                        return res;
                    })
                    .catch((err: any) => {
                        return Observable.throw(err);
                    });
                }

}