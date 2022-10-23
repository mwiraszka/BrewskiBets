import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BetService } from './services/bet.service';

@Component({
  selector: 'bb-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading!: boolean;
  isLoadingSubscription!: Subscription;

  constructor(private betService: BetService) {}

  ngOnInit(): void {
    this.isLoadingSubscription = this.betService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }

  ngOnDestroy(): void {
    this.isLoadingSubscription.unsubscribe();
  }
}
