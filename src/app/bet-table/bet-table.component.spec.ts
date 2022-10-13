import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { BetTableComponent } from './bet-table.component';

describe('BetTableComponent', () => {
  let component: BetTableComponent;
  let fixture: ComponentFixture<BetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule],
      declarations: [BetTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
