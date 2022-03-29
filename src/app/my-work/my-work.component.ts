import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})



export class MyWorkComponent implements OnInit {

  javascriptProject = [
    {
      language: 'javascript',
      name: 'El Pollo Loco',
      text: 'JavaScript -based jump and run.',
      imgPath: '../../assets/img/projectImg/elpolloloco.png',
      projectLink: 'https://dominic-gerth.com/ElPolloLoco/',
    },
    {
      language: 'javascript',
      name: 'JOIN',
      text: 'An Kanban Board app',
      imgPath: '../../assets/img/projectImg/join.png',
      projectLink: 'https://dominic-gerth.com/join/addTask.html',
    },
    {
      language: 'javascript',
      name: 'Pokedex',
      text: 'A Pokedex build with RESTful API',
      imgPath: '../../assets/img/projectImg/pokedex.png',
      projectLink: 'https://dominic-gerth.com/pokedex/',
    }
  ]

  angularProject = [
    {
      language: 'angular',
      name: 'This Website',
      text: '- made with Angular',
      imgPath: '../../assets/img/projectImg/myWebsite.png',
      projectLink: 'https://dominic-gerth.com/',
    },
    {
      language: 'angular',
      name: 'Ring of fire',
      text: 'The popular card game',
      imgPath: '../../assets/img/projectImg/ringoffire.png',
      projectLink: 'https://dominic-gerth.com/ringoffire',
    }
  ]

  constructor() {
  }

  javascript = true;
  angular = true;
  jsShrink = false;
  jsRise = false;
  angShrink = false;
  angRise = false;

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  select(part: string) {
    if (part == 'javascript') {
      this.showJS();
    }
    else if (part == 'angular') {
      this.showAng();
    }
    else if (part == 'all') {
      this.showAll();
    }
  }

  showJS() {
    if (this.fromAngtoJS()) {
      this.setJSfromAng();
    }
    else if (this.fromAll()) {
      this.setJSfromAll();
    }
  }

  showAng() {
    if (this.fromJstoAng()) {
      this.setAngfromJS();
    }
    else if (this.fromAll()) {
      this.setAngfromAll();
    }
  }

  showAll() {
    if (this.fromJStoAll()) {
      this.setAllfromJS();
    }
    else if (this.fromAngtoAll()) {
      this.setAllfromAng();
    }
  };

  setJSfromAng(){
    this.javascript = true;
    this.jsRise = true;
    this.angShrink = true;
    setTimeout(() => {
      this.jsRise = false;
      this.angular = false;
      this.angShrink = false;
    }, 255);
  }

  setJSfromAll(){
    this.angShrink = true;
    setTimeout(() => {
      this.jsRise = false;
      this.angular = false;
      this.angShrink = false;
    }, 255);
  }

  setAngfromJS(){
    this.angular = true;
    this.angRise = true;
    this.jsShrink = true;
    setTimeout(() => {
      this.angular = true;
      this.javascript = false;
      this.jsShrink = false;
      this.angRise = false;
    }, 255);
  }

  setAngfromAll(){
    this.jsShrink = true;
    setTimeout(() => {
      this.angular = true;
      this.javascript = false;
      this.jsShrink = false;
      this.angRise = false;
    }, 255);
  }

  setAllfromJS(){
    this.angular = true;
    this.angRise = true;
    setTimeout(() => {
      this.javascript = true;
      this.angular = true;
      this.jsRise = false;
      this.angRise = false;
    }, 255);
  }

  setAllfromAng(){
    this.javascript = true;
    this.jsRise = true;
    setTimeout(() => {
      this.javascript = true;
      this.angular = true;
      this.jsRise = false;
      this.angRise = false;
    }, 255);
  }

  fromAll() {
    return this.javascript == true && this.angular == true;
  }

  fromAngtoJS() {
    return this.javascript == false && this.angular == true
  }

  fromJstoAng() {
    return this.javascript == true && this.angular == false;
  }

  fromJStoAll() {
    return this.javascript == true && this.angular == false;
  }

  fromAngtoAll() {
    return this.javascript == false && this.angular == true;
  }

  ngOnInit(): void {
  }

}
