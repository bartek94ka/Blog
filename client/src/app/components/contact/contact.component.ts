import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(){}
  imageContact: string = "assets/images/contact.png";
  imageEmail: string = "assets/images/email.png";
  imageLinkedIn: string = "assets/images/linkedin.png";
  imageFacebook: string = "assets/images/facebook.png";
  imageGithub: string = "assets/images/github.png";
}