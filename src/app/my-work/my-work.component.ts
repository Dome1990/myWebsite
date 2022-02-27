import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})



export class MyWorkComponent implements OnInit {

  javascriptProject = [
  {
    language : 'javascript',
    name : 'El Pollo Loco',
    text : 'JavaScript -based jump and run.',
    imgPath : '../../assets/img/projectImg/elpolloloco.png',
    projectLink : 'https://dominic-gerth.com/ElPolloLoco/',
  },
  {
    language : 'javascript',
    name : 'JOIN',
    text : 'An Kanban Board app',
    imgPath : '../../assets/img/projectImg/join.png',
    projectLink : 'https://dominic-gerth.com/join/addTask.html',
  },
  {
    language : 'javascript',
    name : 'Pokedex',
    text : 'A Pokedex build with RESTful API',
    imgPath : '../../assets/img/projectImg/pokedex.png',
    projectLink : 'https://dominic-gerth.com/pokedex/',
  }
  ]

  angularProject = [
    {
      language : 'angular',
      name : 'This Website',
      text : '- made with Angular',
      imgPath : '../../assets/img/projectImg/myWebsite.png',
      projectLink : 'https://dominic-gerth.com/',
    }
  ]

  // projects = [
  //   {
  //     javascript: [
  //       {
  //         name: 'El Pollo Loco',
  //         text: 'JavaScript -based jump and run.',
  //         imgPath: '../../assets/img/projectImg/elpolloloco.png',
  //         projectLink: 'http://www.google.com',
  //       }
  //     ],
  //     angular: [

  //     ]
  //   }
  // ]

  constructor() {
  }

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
    else if (part == 'angular') {
      this.angular = true;
      this.javascript = false;
      console.log(this.angular, this.javascript);
    }
    else if (part == 'all') {
      this.javascript = true;
      this.angular = true;
      console.log(this.angular, this.javascript);
    }
  }

  ngOnInit(): void {
  }

}
