import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import packageJson from '../../../package.json';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should include the current year and app title', () => {
    const el = fixture.nativeElement as HTMLElement;
    const currentYear = new Date().getFullYear();
    expect(el.querySelector('small')?.textContent).toContain(
      `Copyright © ${currentYear} Brewski Bets`
    );
  });

  it('should include the app version', () => {
    const el = fixture.nativeElement as HTMLElement;
    const appVersion = packageJson.version;
    expect(el.querySelector('address p')?.textContent).toBe(`v${appVersion}`);
  });
});
