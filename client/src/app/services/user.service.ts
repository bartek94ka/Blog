import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpRequest, HttpHandler, HttpClient } from '@angular/common/http'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { RequestOptions } from '@angular/http/src/base_request_options';
// import { Headers } from '@angular/http/src/headers';

const endpoint = 'http://127.0.0.1:8000/api/'

@Injectable()
export class UserService {
    constructor(private http: Http, private httpClient: HttpClient){}
    private tokenValue : string = ""

    getLoggedUserData(token){
        this.tokenValue = "Token " + token
        console.log("get logged user data")
        var options = new RequestOptions({
            headers: new Headers({
                'Authorization': this.tokenValue,
                'Content-Type': 'application/json'
            })
        })
        return this.http.get(endpoint + "api/user/logged/", options)
        .map(response=>response.json())
    }
}