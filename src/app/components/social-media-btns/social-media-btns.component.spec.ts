import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaBtnsComponent } from './social-media-btns.component';

describe('SocialMediaBtnsComponent', () => {
  let component: SocialMediaBtnsComponent;
  let fixture: ComponentFixture<SocialMediaBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
