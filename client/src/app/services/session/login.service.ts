import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'http://127.0.0.1:8000/api/'

@Injectable()
export class LoginService {
    constructor(private http: Http){}

    login(username, password){
        let body = {
            "username": username,
            "password": password
        }
        return this.http.post(endpoint + "api-token-auth/", body).map(response=>response.json())
    }
}