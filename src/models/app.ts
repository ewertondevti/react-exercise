export interface AppState {
  currency?: string;
  updCurrency: (currency: string) => void;
}
