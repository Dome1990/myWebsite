import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  currentRoute = '';
  constructor(public router: Router) { }

  onActivate() {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 
     //or document.body.scrollTop = 0;
     //or document.querySelector('body').scrollTo(0,0)
 }

  images = [
    'bird.jpg',
    'finch.jpg',
    'northern-hawk-owl.jpg',
    'water.jpg'
  ];

}
