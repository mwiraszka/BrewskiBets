import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Bet } from '../types/bet.model';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  _isEditorOpen = new BehaviorSubject(false);
  isEditorOpen$ = this._isEditorOpen.asObservable();

  _bet = new BehaviorSubject<Bet | undefined>(undefined);
  bet$ = this._bet.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  openEditor(bet?: Bet): void {
    this._isEditorOpen.next(true);
    this._bet.next(bet);
    this.document.body.classList.add('editor-open');
  }

  closeEditor(): void {
    this._isEditorOpen.next(false);
    this.document.body.classList.remove('editor-open');
  }

  addBet(bet: Bet): void {
    console.log('Add bet', bet);
  }

  updateBet(bet: Bet): void {
    console.log('Update bet', bet);
  }

  deleteBet(bet: Bet): void {
    console.log('Delete bet', bet);
  }
}
