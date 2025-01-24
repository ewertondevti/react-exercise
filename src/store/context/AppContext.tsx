import { AppState } from '@/models/app';
import { createContext, FC, PropsWithChildren, useState } from 'react';

export const AppContext = createContext<AppState>({ updCurrency: () => {} });

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currency, setCurrency] = useState('');

  const updCurrency = (currency: string) => setCurrency(currency);

  return (
    <AppContext.Provider
      value={{
        currency,
        updCurrency,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
