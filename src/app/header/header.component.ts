import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {



  constructor() { }

  resp = false;

openCloseLinks(){
  if(this.resp == false){
    this.resp = true;
  }
  else{
    this.resp = false;
  }
}
  ngOnInit(): void {
  }

}
