import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = 'http://127.0.0.1:8000/api/'

@Injectable()
export class CategoryService {
    constructor(private http: Http){}

    getById(categoryId){
        return this.http.get(endpoint + "category/" + categoryId).map(response=>response.json())
    }

    getAll(){
        return this.http.get(endpoint + "category/all/").map(response=>response.json())
    }

    updateCategory(categoryId, body){
        return this.http.put(endpoint + "category/update/" + categoryId, body);
    }

    deleteCategory(categoryId){
        return this.http.delete(endpoint + "category/delete/" + categoryId);
    }
}