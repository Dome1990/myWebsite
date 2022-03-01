import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor() { }

  resp = false;
  lastY = 0;
  scrollDown = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    if(window.pageYOffset > this.lastY){
      console.log('scrolldown');
      this.scrollDown = true;
    }
    else if(window.pageYOffset < this.lastY){
      this.scrollDown = false;
    }
    this.lastY = window.pageYOffset;
  }

  openCloseLinks() {
    if (this.resp == false) {
      this.resp = true;
    }
    else {
      this.resp = false;
    }
  }
  ngOnInit(): void {
    this.lastY = window.pageYOffset;
  }
}
