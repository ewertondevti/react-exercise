import { useAppState } from '@/store';
import { useEffect, useState } from 'react';
import { GetCreditResponse } from '../../models/api';
import { getCreditLimits } from '../../services/apiService';
import { StepContent } from '../../StepContent';

export const AmountStep = () => {
  const [limits, setLimits] = useState<GetCreditResponse>();

  const { updCurrency } = useAppState();

  useEffect(() => {
    getCreditLimits().then(limits => {
      setLimits(limits);
      updCurrency(limits.currency);
    });
  }, []);

  return <StepContent min={limits?.min} max={limits?.max} fieldname="amount" label="Amount" prefix={limits?.currency} />;
};
