import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiConfig } from '../config/rest-api.config';
import { User } from '../model/user.model';

@Injectable()
export class UserRest {

    constructor(private restApiConfig: RestApiConfig, private http: HttpClient) { }

    register(user: User) {
        return this.http.post<any>(this.restApiConfig.getApiPath() + 
                '/user/register', JSON.stringify(user));
    }

    fetchUser(username: string) {
        return this.http.get<User>(this.restApiConfig.getApiPath() + 
                '/user/' + username);
    }
}
