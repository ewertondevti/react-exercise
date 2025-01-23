import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { GetCreditResponse } from "../../models/api";
import { getCreditLimits } from "../../services/apiService";
import { StepContent } from "../../StepContent";

export const AmountStep = () => {
  const [limits, setLimits] = useState<GetCreditResponse>();

  const form = Form.useFormInstance();

  const amountValue = Form.useWatch("amount", form);

  useEffect(() => {
    getCreditLimits().then((limits) => {
      setLimits(limits);
    });
  }, []);

  return (
    <StepContent
      min={limits?.min}
      max={limits?.max}
      value={amountValue}
      fieldname="amount"
      label="Amount"
    />
  );
};
