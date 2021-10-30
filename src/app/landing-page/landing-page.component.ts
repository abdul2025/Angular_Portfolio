import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('Title', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0px)',
      })),
      transition('* => *', [
        style({
          opacity: 0,
          transform: 'translateX(600px)'
        }),
        animate(800)
      ]),
    ]),
    trigger('LandingPage', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('* => *', [
        style({
          opacity: 0,
          transform: 'translateX(1000px)'
        }),
        animate(1100)
      ]),
    ]),
  ],
})
export class LandingPageComponent implements OnInit {


  value: string = 'Development'

  constructor() { }


  checkChanges() {
    if (this.value == 'Development' ){
      this.value = 'Research'
      return
    }
    if (this.value == 'Research' ){
      this.value = 'Design'
      return
    }
    if (this.value == 'Design' ){
      this.value = 'Development'
      return
    }
  }

  ngOnInit(): void {
    // RxJS v6+
    const source = interval(2500);
    const subscribe = source.subscribe(val =>{
      this.checkChanges()
    } );
  }







}
