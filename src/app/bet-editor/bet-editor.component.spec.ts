import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetEditorComponent } from './bet-editor.component';

describe('BetEditorComponent', () => {
  let component: BetEditorComponent;
  let fixture: ComponentFixture<BetEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
