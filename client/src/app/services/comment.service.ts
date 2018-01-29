import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'http://127.0.0.1:8000/api/'

@Injectable()
export class CommentService {
    constructor(private http: Http){}

    create(body){
        return this.http.post(endpoint + "comment/", body).map(response=>response.json())
    }

    getAll(){
        return this.http.get(endpoint + "comment/all/").map(response=>response.json())
    }
    
    getCommentByPostId(postId){
        return this.http.get(endpoint + "comment/post/" + postId).map(response=>response.json())
    }

    getById(commentId){
        return this.http.get(endpoint + "comment/" + commentId).map(response=>response.json())
    }

    // deleteComment(commentId){
    //     return this.http.delete(endpoint + "comment/delete/" + commentId).map(response=>response.json())
    // }
}