import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('ContactPage', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('* => *', [
        style({
          opacity: 0,
          transform: 'translateX(-1100px)'
        }),
        animate(900)
      ]),
    ]),
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('safklhjlk')
  }

}
