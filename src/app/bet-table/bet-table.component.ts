import { Component, OnDestroy, OnInit } from '@angular/core';
import { faBeerMugEmpty, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { BetService } from '../services/bet.service';
import { Bet } from '../types/bet.model';
import { BrewTotals } from '../types/brew-totals.model';
import { customSort } from '../utils/custom-sort';

@Component({
  selector: 'bb-bet-table',
  templateUrl: './bet-table.component.html',
  styleUrls: ['./bet-table.component.scss'],
})
export class BetTableComponent implements OnInit, OnDestroy {
  faBeerMugEmpty = faBeerMugEmpty;
  faPlusSquare = faPlusSquare;

  bets!: Bet[] | null;
  betsSubscription!: Subscription;
  brewTotals!: BrewTotals;

  constructor(private betService: BetService) {}

  ngOnInit(): void {
    this.betService.getBets().then((res) => {});
    this.betsSubscription = this.betService.bets$.subscribe((bets) => {
      this.bets = [...bets].sort(customSort('id', true));
      this.brewTotals = this.tallyBrewTotals(bets);
    });
  }

  openEditor(bet?: Bet): void {
    this.betService.openEditor(bet);
  }

  ngOnDestroy(): void {
    this.betsSubscription.unsubscribe();
  }

  private tallyBrewTotals(bets: Bet[]): BrewTotals {
    if (!bets.length) {
      return {
        michalPossible: 0,
        kasinPossible: 0,
        michalWon: 0,
        kasinWon: 0,
      };
    }

    return {
      michalPossible: bets
        .map((bet) => bet.brewsForMichal)
        .reduce((prev, curr) => prev + curr),
      kasinPossible: bets
        .map((bet) => bet.brewsForKasin)
        .reduce((prev, curr) => prev + curr),
      michalWon: bets
        .filter((bet) => bet.result === 'michalWins')
        .map((bet) => bet.brewsForMichal)
        .reduce((prev, curr) => prev + curr, 0),
      kasinWon: bets
        .filter((bet) => bet.result === 'kasinWins')
        .map((bet) => bet.brewsForKasin)
        .reduce((prev, curr) => prev + curr, 0),
    };
  }
}
