import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'http://127.0.0.1:8000/api/'

@Injectable()
export class PostService {
    constructor(private http: Http){}

    get(){
        return this.http.get(endpoint + "post/").map(response=>response.json())
    }

    getById(postId){
        return this.http.get(endpoint + "post/" + postId).map(response=>response.json())
    }

    deletePostById(postId){
        return this.http.delete(endpoint + "post/delete/" + postId).map(response=>response.json())
    }

    updatePostById(postId, body){
        return this.http.put(endpoint + "post/update/" + postId, body).map(response=>response.json())
    }

    getByPage(pageNumber){
        return this.http.get(endpoint + "post/page/" + pageNumber).map(response=>response.json())
    }
}