import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faClose, faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons';
import { HotToastService } from '@ngneat/hot-toast';
import { Subscription } from 'rxjs';

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

  display = false;
  displaySubscription!: Subscription;

  isEditMode = false;
  form!: FormGroup;
  result!: 'michalWins' | 'kasinWins' | 'void' | null;

  constructor(
    private betService: BetService,
    private formBuilder: FormBuilder,
    private hotToastService: HotToastService
  ) {}

  ngOnInit(): void {
    this.displaySubscription = this.betService.isEditorOpen$.subscribe((isEditorOpen) => {
      this.display = isEditorOpen;
    });

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
    this.betService.setLoadingSpinner(true);
    const [newBet, code] = this.handleBetData();

    this.betService.deleteBet(newBet, code).then((res) => {
      this.betService.setLoadingSpinner(false);
      if (res.error) {
        this.hotToastService.error(res.error.message);
      } else {
        this.hotToastService.success('Successfully deleted bet');
        this.betService.closeEditor();
      }
    });
  }

  onSubmit(): void {
    this.betService.setLoadingSpinner(true);
    const [newBet, code] = this.handleBetData();

    if (this.isEditMode) {
      this.betService.updateBet(newBet, code).then((res) => {
        this.betService.setLoadingSpinner(false);
        if (res.error) {
          this.hotToastService.error(res.error.message);
        } else {
          this.hotToastService.success('Successfully updated bet');
          this.betService.closeEditor();
        }
      });
    } else {
      this.betService.addBet(newBet, code).then((res) => {
        this.betService.setLoadingSpinner(false);
        if (res.error) {
          this.hotToastService.error(res.error.message);
        } else {
          this.hotToastService.success('Successfully added bet');
          this.betService.closeEditor();
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.betSubscription.unsubscribe();
    this.displaySubscription.unsubscribe();
  }

  // Remove code and convert default string-type form control values to number-type
  private handleBetData(): [Bet, string] {
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
