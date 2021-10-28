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
        transform: 'translateX(-1600px)',
      })),
      transition('* => *', [
        style({
          opacity: 0,
          transform: 'translateX(600px)'
        }),
        animate(800)
      ]),
    ]),
  ]
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
    const source = interval(3000);
    const subscribe = source.subscribe(val =>{
      this.checkChanges()
    } );
  }



}
