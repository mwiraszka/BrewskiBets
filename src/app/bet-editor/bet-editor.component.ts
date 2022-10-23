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

  bet: Bet | null = null;
  betSubscription!: Subscription;
  isEditMode = false;
  display$!: Observable<boolean>;
  form!: FormGroup;
  result!: 'michalWins' | 'kasinWins' | 'void' | null;

  constructor(private betService: BetService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.display$ = this.betService.isEditorOpen$;
    this.betSubscription = this.betService.betInEditor$.subscribe((betInEditor) => {
      this.bet = betInEditor;
      this.isEditMode = !!this.bet;
      this.initForm(this.bet);
      this.result = this.bet?.result ?? null;
    });
  }

  initForm(bet: Bet | null): void {
    this.form = this.formBuilder.group({
      id: [bet?.id],
      details: [bet?.details, [Validators.required, Validators.pattern(/[^\s]/)]],
      brewsForMichal: [
        bet?.brewsForMichal,
        [Validators.required, Validators.pattern(/[1-9]/)],
      ],
      brewsForKasin: [
        bet?.brewsForKasin,
        [Validators.required, Validators.pattern(/[1-9]/)],
      ],
      result: [bet?.result],
      code: ['', [Validators.required, Validators.pattern(/[^\s]/)]],
    });
  }

  onCheckboxChange(checkbox: 'michalWins' | 'kasinWins' | 'void'): void {
    this.result = this.result === checkbox ? null : checkbox;
    this.form.controls['result'].setValue(this.result);
  }

  onClose(): void {
    this.betService.closeEditor();
  }

  onDelete(): void {
    const [newBet, code] = this.handleBetData(this.form.value);
    this.betService.deleteBet(newBet, code).then((res) => {});
    this.betService.closeEditor();
  }

  onSubmit(): void {
    const [newBet, code] = this.handleBetData(this.form.value);

    if (this.isEditMode) {
      this.betService.updateBet(newBet, code).then((res) => {});
    } else {
      this.betService.addBet(newBet, code).then((res) => {});
    }

    this.betService.closeEditor();
  }

  ngOnDestroy(): void {
    this.betSubscription.unsubscribe();
  }

  // Remove code and convert default string-type form control values to number-type
  private handleBetData(formData: any): [Bet, string] {
    const bet: Bet = {
      id: this.form.controls['id'].value,
      details: this.form.controls['details'].value,
      brewsForKasin: +this.form.controls['brewsForKasin'].value,
      brewsForMichal: +this.form.controls['brewsForMichal'].value,
      result: this.form.controls['result'].value,
    };

    const code = this.form.controls['code'].value;

    return [bet, code];
  }
}
