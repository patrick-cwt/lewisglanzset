import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiConfig } from '../config/rest-api.config';

@Injectable()
export class AuthRest {

    constructor(private restApiConfig: RestApiConfig, private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<string>(this.restApiConfig.getApiPath() + 
                '/login', {username, password});
    }
}
