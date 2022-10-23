import { Bet } from './bet.model';

export interface ApiResponse {
  error?: Error;
  payload?: {
    bet?: Bet;
    bets?: Bet[];
  };
}
