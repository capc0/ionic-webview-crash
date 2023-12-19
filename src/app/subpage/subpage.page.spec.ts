import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubpagePage } from './subpage.page';

describe('SubpagePage', () => {
  let component: SubpagePage;
  let fixture: ComponentFixture<SubpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
