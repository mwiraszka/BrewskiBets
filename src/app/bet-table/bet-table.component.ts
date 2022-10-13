import { Component, OnInit } from '@angular/core';
import { faBeerMugEmpty, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { BetService } from '../services/bet.service';
import { Bet } from '../types/bet.model';

@Component({
  selector: 'bb-bet-table',
  templateUrl: './bet-table.component.html',
  styleUrls: ['./bet-table.component.scss'],
})
export class BetTableComponent implements OnInit {
  faBeerMugEmpty = faBeerMugEmpty;
  faPlusSquare = faPlusSquare;

  bets!: Bet[];
  totalBrewsForMichal!: number;
  totalBrewsForKasin!: number;
  totalMichalWins!: number;
  totalKasinWins!: number;

  constructor(private betService: BetService) {}

  ngOnInit(): void {
    this.bets = [
      {
        id: '1',
        description: 'This is a placeholder description for bet number 1',
        brewsForKasin: 2,
        brewsForMichal: 3,
        result: null,
      },
      {
        id: '2',
        description:
          "Here's a description for bet 2 (and here are some additional details added to the description)",
        brewsForKasin: 6,
        brewsForMichal: 2,
        result: 'michalWins',
      },
      {
        id: '3',
        description: 'Description 3 is a pretty short one',
        brewsForKasin: 5,
        brewsForMichal: 8,
        result: null,
      },
      {
        id: '4',
        description: 'And this one is even shorter',
        brewsForKasin: 2,
        brewsForMichal: 3,
        result: null,
      },
      {
        id: '5',
        description:
          'This bet over here takes up quite a bit of space and includes lots of additional information (some in parantheses), and some like this - and maybe even some like this',
        brewsForKasin: 6,
        brewsForMichal: 2,
        result: null,
      },
      {
        id: '6',
        description: 'Here is a bet description with some numbers like 3-0 or 2-1',
        brewsForKasin: 5,
        brewsForMichal: 8,
        result: 'kasinWins',
      },
      {
        id: '7',
        description: 'This is a placeholder description for bet number 7',
        brewsForKasin: 2,
        brewsForMichal: 3,
        result: null,
      },
      {
        id: '8',
        description:
          "Here's a description for bet 8 (and here are some additional details)",
        brewsForKasin: 6,
        brewsForMichal: 2,
        result: 'void',
      },
      {
        id: '9',
        description: 'Description 9 is a pretty short one',
        brewsForKasin: 5,
        brewsForMichal: 4,
        result: 'void',
      },
      {
        id: '10',
        description: 'And this one is even shorter',
        brewsForKasin: 2,
        brewsForMichal: 2,
        result: null,
      },
      {
        id: '11',
        description:
          'This bet over here takes up quite a bit of space and includes lots of additional information (some in parantheses), and some like this - and maybe even some like this',
        brewsForKasin: 3,
        brewsForMichal: 2,
        result: 'void',
      },
      {
        id: '12',
        description:
          'Here is a bet description with some names like Robert Lewandowski or Kylian Mbappe',
        brewsForKasin: 1,
        brewsForMichal: 1,
        result: 'kasinWins',
      },
    ];

    this.totalBrewsForMichal = this.bets
      .map((bet) => bet.brewsForMichal)
      .reduce((prev, curr) => prev + curr);

    this.totalBrewsForKasin = this.bets
      .map((bet) => bet.brewsForKasin)
      .reduce((prev, curr) => prev + curr);

    this.totalMichalWins = this.bets
      .filter((bet) => bet.result === 'michalWins')
      .map((bet) => bet.brewsForMichal)
      .reduce((prev, curr) => prev + curr);

    this.totalKasinWins = this.bets
      .filter((bet) => bet.result === 'kasinWins')
      .map((bet) => bet.brewsForKasin)
      .reduce((prev, curr) => prev + curr);
  }

  openEditor(bet?: Bet): void {
    this.betService.openEditor(bet);
  }
}
