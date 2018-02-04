import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'http://127.0.0.1:8000/api/'

@Injectable()
export class PostService {
    constructor(private http: Http){}

    create(body){
        return this.http.post(endpoint + "post/", body).map(response=>response.json)
    }

    getAllPosts(){
        return this.http.get(endpoint + "post/all/").map(response=>response.json())
    }

    getById(postId){
        return this.http.get(endpoint + "post/" + postId + "/").map(response=>response.json())
    }

    getPostsByCategoryId(categoryId){
        return this.http.get(endpoint + "post/category/" + categoryId + "/").map(response=>response.json())
    }

    deletePostById(postId){
        return this.http.delete(endpoint + "post/delete/" + postId + "/").map(response=>response.json())
    }

    updatePostById(postId, body){
        return this.http.put(endpoint + "post/update/" + postId, body).map(response=>response.json())
    }

    getByPage(pageNumber){
        // var options = new RequestOptions({
        //     headers: new Headers({
        //         'Origin': 'http://localhost:4200',
        //         'Content-Type': 'application/json'
        //     })
        // })
        return this.http.get(endpoint + "post/page/" + pageNumber + "/").map(response=>response.json())
    }

    getPostCount(){
        return this.http.get(endpoint + "post/count/").map(response=>response.json())
    }
}