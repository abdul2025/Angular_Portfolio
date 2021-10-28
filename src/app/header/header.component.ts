import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('header', [
      state('in', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateY(-100px)'
        }),
        animate(800)
      ]),
    ]),
  ]

})
export class HeaderComponent implements OnInit {
  isMobileMode = false


  constructor() { }

  ngOnInit(): void {
  }



  dropDownHeader() {
    this.isMobileMode == false ? this.isMobileMode = true : this.isMobileMode = false
    console.log(this.isMobileMode)
  }


  CloseHeader() {
    this.isMobileMode = !this.isMobileMode
    console.log(this.isMobileMode)

  }

}
