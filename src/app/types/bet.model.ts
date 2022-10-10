export interface Bet {
  id: string;
  description: string;
  brewsForKasin: number;
  brewsForMichal: number;
  result: null | 'kasinWins' | 'michalWins' | 'void';
}
