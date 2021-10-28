import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMediaComponent } from './sidebar-media.component';

describe('SidebarMediaComponent', () => {
  let component: SidebarMediaComponent;
  let fixture: ComponentFixture<SidebarMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
