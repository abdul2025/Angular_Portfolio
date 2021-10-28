import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-media',
  templateUrl: './sidebar-media.component.html',
  styleUrls: ['./sidebar-media.component.scss'],
  animations: [
    trigger('SideBarIcons', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(600)
      ]),
    ]),
    trigger('SideBarIconsHover', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('250ms')),
      transition('initial=>final', animate('150ms'))
    ]),
  ]
})
export class SidebarMediaComponent implements OnInit {
  currentStateTw = 'initial';
  currentStateLin = 'initial';
  currentStateGit = 'initial';

  changeStateTwiIn() {
    this.currentStateTw = this.currentStateTw === 'initial' ? 'final' : 'initial';
  }
  changeStateTwiOut() {
    this.currentStateTw = this.currentStateTw === 'initial' ? 'final' : 'initial';
  }
  changeStateLinIn() {
    this.currentStateLin = this.currentStateLin === 'initial' ? 'final' : 'initial';
  }
  changeStateALinOut() {
    this.currentStateLin = this.currentStateLin === 'initial' ? 'final' : 'initial';
  }
  changeStateGitIn() {
    this.currentStateGit = this.currentStateGit === 'initial' ? 'final' : 'initial';
  }
  changeStateAGitOut() {
    this.currentStateGit = this.currentStateGit === 'initial' ? 'final' : 'initial';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
