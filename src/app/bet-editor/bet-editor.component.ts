import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faClose, faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';

import { BetService } from '../services/bet.service';
import { Bet } from '../types/bet.model';

@Component({
  selector: 'bb-bet-editor',
  templateUrl: './bet-editor.component.html',
  styleUrls: ['./bet-editor.component.scss'],
})
export class BetEditorComponent implements OnInit, OnDestroy {
  faClose = faClose;
  faBeerMugEmpty = faBeerMugEmpty;
  result!: 'michalWins' | 'kasinWins' | 'void' | null;

  display$!: Observable<boolean>;
  bet?: Bet;
  betSubscription!: Subscription;
  form!: FormGroup;

  constructor(private betService: BetService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.display$ = this.betService.isEditorOpen$;
    this.betSubscription = this.betService.bet$.subscribe((bet) => {
      this.bet = bet;
      this.initForm(bet);
      this.result = this.bet?.result ?? null;
    });
  }

  initForm(bet?: Bet): void {
    this.form = this.formBuilder.group({
      id: [bet?.id, [Validators.required]],
      description: [bet?.description, [Validators.required, Validators.pattern(/[^\s]/)]],
      brewsForMichal: [
        bet?.brewsForMichal,
        [Validators.required, Validators.pattern(/\d/)],
      ],
      brewsForKasin: [
        bet?.brewsForKasin,
        [Validators.required, Validators.pattern(/\d/)],
      ],
      result: [bet?.result],
      password: ['', [Validators.required, Validators.pattern(/[^\s]/)]],
    });
  }

  onCheckboxChange(checkbox: 'michalWins' | 'kasinWins' | 'void'): void {
    this.result = this.result === checkbox ? null : checkbox;
    this.form.controls['result'].setValue(this.result);
  }

  onClose(): void {
    this.betService.closeEditor();
  }

  onDelete(bet: Bet): void {
    this.betService.deleteBet(bet);
    this.betService.closeEditor();
  }

  onSubmit(): void {
    console.log(':: submission:', this.form.value);
    this.betService.closeEditor();
  }

  ngOnDestroy(): void {
    this.betSubscription.unsubscribe();
  }
}
