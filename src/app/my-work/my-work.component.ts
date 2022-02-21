import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  javascript = true;
  angular = true;


  goToLink(url: string) {
    window.open(url, "_blank");
  }

  select(part: string) {
    if (part == 'javascript') {
      this.javascript = true;
      this.angular = false;
      console.log(this.angular, this.javascript);
    }
    else if(part == 'angular'){
      this.angular = true;
      this.javascript = false;
      console.log(this.angular, this.javascript);
    }
    else if(part == 'all'){
      this.javascript = true;
      this.angular = true;
      console.log(this.angular, this.javascript);
    }
  }

  ngOnInit(): void {
  }

}
