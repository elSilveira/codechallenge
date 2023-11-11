import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSelectorComponent } from './settings-selector.component';

describe('SettingsSelectorComponent', () => {
  let component: SettingsSelectorComponent;
  let fixture: ComponentFixture<SettingsSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsSelectorComponent]
    });
    fixture = TestBed.createComponent(SettingsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
