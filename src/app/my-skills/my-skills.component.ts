import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skillClass = ['skill'];

  @ViewChild('mySkill0', { static: false })
  private mySkills0!: ElementRef<HTMLDivElement>;
  @ViewChild('mySkill1', { static: false })
  private mySkills1!: ElementRef<HTMLDivElement>;
  @ViewChild('mySkill2', { static: false })
  private mySkills2!: ElementRef<HTMLDivElement>;
  @ViewChild('mySkill3', { static: false })
  private mySkills3!: ElementRef<HTMLDivElement>;
  @ViewChild('mySkill4', { static: false })
  private mySkills4!: ElementRef<HTMLDivElement>;
  @ViewChild('mySkill5', { static: false })
  private mySkills5!: ElementRef<HTMLDivElement>;

  isMySkillsScrolledIntoView: boolean | undefined;


  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    const skill = [
      this.mySkills0,
      this.mySkills1,
      this.mySkills2,
      this.mySkills3,
      this.mySkills4,
      this.mySkills5
    ];
    this.checkElement(skill);
  }

  checkElement(skill: any) {
    for (let i = 0; i < skill.length; i++) {
      if (skill[i]) {
        const rect = skill[i].nativeElement.getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;
        this.isMySkillsScrolledIntoView = topShown && bottomShown;
        if (this.isMySkillsScrolledIntoView) {
          skill[i].nativeElement.classList.add('skillSeen');
        }
      }
    }
  }
}
