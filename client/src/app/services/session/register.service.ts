import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'http://127.0.0.1:8000/api/'

@Injectable()
export class RegisterService {
    constructor(private http: Http){}

    registerUser(username, email, password){
        let body = {
            "username": username,
            "email": email,
            "password": password
        }
        console.log(body);
        return this.http.post(endpoint + "signup/", body);
    }
}