import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from './../../services/post.servcie'

@Component({
  selector: 'post',
  templateUrl: './post.component.html'
//   styleUrls: ['./app.component.css']
})
export class PostComponent {
  
  private req: any;
  constructor(private _service: PostService){}

  ngOnInit(){
    this.req = this._service.get().subscribe(data=>{
      console.log(data)
    })
    // console.log(this.posts)
  }
  ngOnDestroy(){}
}