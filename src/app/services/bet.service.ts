import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ApiResponse } from '../types/api-response.model';
import { Bet } from '../types/bet.model';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  _bets = new BehaviorSubject<Bet[]>([]);
  bets$ = this._bets.asObservable();

  _isEditorOpen = new BehaviorSubject(false);
  isEditorOpen$ = this._isEditorOpen.asObservable();

  _betInEditor = new BehaviorSubject<Bet | null>(null);
  betInEditor$ = this._betInEditor.asObservable();

  _isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this._isLoading.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document, private http: HttpClient) {}

  openEditor(bet?: Bet): void {
    this._betInEditor.next(bet ?? null);
    this._isEditorOpen.next(true);
    this.document.body.classList.add('editor-open');
  }

  closeEditor(): void {
    this._isEditorOpen.next(false);
    this.document.body.classList.remove('editor-open');
  }

  setLoadingSpinner(isLoading: boolean): void {
    this._isLoading.next(isLoading);
  }

  async getBets(): Promise<ApiResponse> {
    return firstValueFrom(
      this.http.get<Bet[]>(environment.apiEndpoint).pipe(
        tap((bets) => {
          this._bets.next(bets);
        }),
        map((bets) => ({ payload: { bets } })),
        catchError(() => of({ error: new Error('Failed to fetch bets from database') }))
      )
    );
  }

  async addBet(betToAdd: Bet, code: string): Promise<ApiResponse> {
    /**
     * Escaping the backslash for new lines seems necessary to work with API Gateway
     * integration mapping set up for this endpoint (not needed for updateBet())
     */
    const modifiedBet = {
      ...betToAdd,
      details: betToAdd.details.replaceAll('\n', '\\n'),
    };

    return firstValueFrom(
      this.http
        .post<ApiResponse>(environment.apiEndpoint, modifiedBet, {
          headers: { 'x-api-key': code },
        })
        .pipe(
          tap(() => {
            this._bets.next(this._bets.value?.concat([betToAdd]));
          }),
          map(() => ({ payload: { bet: betToAdd } })),
          catchError(() => of({ error: new Error('Failed to add new bet') }))
        )
    );
  }

  async updateBet(betToUpdate: Bet, code: string): Promise<ApiResponse> {
    return firstValueFrom(
      this.http
        .put<null>(environment.apiEndpoint + betToUpdate.id, betToUpdate, {
          headers: { 'x-api-key': code },
        })
        .pipe(
          tap(() => {
            this._bets.next(
              this._bets.value.map((bet) =>
                bet.id === betToUpdate.id ? betToUpdate : bet
              )
            );
          }),
          map(() => ({ payload: { bet: betToUpdate } })),
          catchError(() => of({ error: new Error('Failed to update bet') }))
        )
    );
  }

  async deleteBet(betToDelete: Bet, code: string): Promise<ApiResponse> {
    return firstValueFrom(
      this.http
        .delete<null>(environment.apiEndpoint + betToDelete.id, {
          headers: { 'x-api-key': code },
        })
        .pipe(
          tap(() => {
            this._bets.next(this._bets.value.filter((bet) => bet.id !== betToDelete.id));
          }),
          map(() => ({ payload: { bet: betToDelete } })),
          catchError(() => of({ error: new Error('Failed to delete bet') }))
        )
    );
  }
}
