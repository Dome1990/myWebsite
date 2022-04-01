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
  /**
   * check if the element is scalled into view
   */
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

  /**
   * check if the element is in screen
   * @param skill array of elements that we want to check
   */
  checkElement(skill: any) {
    for (let i = 0; i < skill.length; i++) {
      if (skill[i]) {
        const rect = skill[i].nativeElement.getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;
        this.isMySkillsScrolledIntoView = topShown && bottomShown;
        if (this.rectToBig(rect, topShown)) {
          skill[i].nativeElement.classList.add('seen');
        }
        else if (this.isMySkillsScrolledIntoView) {
          skill[i].nativeElement.classList.add('seen');
        }
      }
    }
  }

  /**
   * check if the div height is bigger than the height of the window && in view
   * @param rect skill[i].nativeElement.getBoundingClientRect() -- params of the div to check
   * @param topShown rect.top >= 0 -- is the top of the div already in the viewport?
   * @returns boolean
   */
  rectToBig(rect: any, topShown: any) {
    return rect.height >= window.innerHeight && topShown && rect.bottom - window.innerHeight <= 300;
  }
}

