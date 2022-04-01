import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  isMySkillsScrolledIntoView: boolean | undefined;

  @ViewChild('aboutMe', { static: false })
  private aboutMe!: ElementRef<HTMLDivElement>;
  @ViewChild('motivation1', { static: false })
  private motivation1!: ElementRef<HTMLDivElement>;
  @ViewChild('motivation2', { static: false })
  private motivation2!: ElementRef<HTMLDivElement>;
  @ViewChild('motivation3', { static: false })
  private motivation3!: ElementRef<HTMLDivElement>;
  @ViewChild('motivation4', { static: false })
  private motivation4!: ElementRef<HTMLDivElement>;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    const skill = [
      this.aboutMe,
      this.motivation1,
      this.motivation2,
      this.motivation3,
      this.motivation4
    ];
    this.checkElement(skill);
  }

  checkElement(skill: any) {

    console.log('top '+skill[0].nativeElement.getBoundingClientRect().top);
    console.log('bottom '+skill[0].nativeElement.getBoundingClientRect().bottom);
    /* console.log(skill[0].nativeElement.getBoundingClientRect()); */
    console.log(skill[0].nativeElement.getBoundingClientRect().bottom - window.innerHeight);
    console.log('window inner height '+ window.innerHeight);
    for (let i = 0; i < skill.length; i++) {
      if (skill[i]) {
        const rect = skill[i].nativeElement.getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;
        this.isMySkillsScrolledIntoView = topShown && bottomShown;
         if(this.rectToBig(rect, topShown)){
          skill[i].nativeElement.classList.add('seen');
        }
        else if (this.isMySkillsScrolledIntoView) {
          skill[i].nativeElement.classList.add('seen');
        }
      }
    }
  }

rectToBig(rect:any, topShown:any){
  return rect.height >= window.innerHeight && topShown && rect.bottom - window.innerHeight <= 100;
}
}

