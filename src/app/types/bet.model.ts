export interface Bet {
  id: string;
  details: string;
  brewsForKasin: number;
  brewsForMichal: number;
  result: null | 'kasinWins' | 'michalWins' | 'void';
}
