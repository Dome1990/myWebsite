import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit {

  /**
   * the headline and profilepicture are invisible (opacity: 0;)
   */
  top = ['invisible'];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * is executed, when the picture is load and changes the classlist to start an fade in animation
   */
  fadeIn(){
    this.top = ['contentTop', 'fadeIn'];
  }

}
