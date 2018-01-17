import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpRequest, HttpHandler, HttpClient } from '@angular/common/http'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
        return this.http.get(endpoint + "user/logged/", options)
        .map(response=>response.json())
    }
    updateUserData(token, user){
        this.tokenValue = "Token " + token
        var options = new RequestOptions({
            headers: new Headers({
                'Authorization': this.tokenValue,
                'Content-Type': 'application/json'
            })
        })
        var url = endpoint + "user/update/" + user.id + "/"
        return this.http.put(url, user, options).
        map(response=>response.json())
    }
}