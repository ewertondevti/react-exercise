import { Form } from "antd";
import React from "react";
import { StepContent } from "../../StepContent";

export const MounthsStep = () => {
  const form = Form.useFormInstance();

  const mounthsValue = Form.useWatch("mounths", form);

  return (
    <StepContent
      min={3}
      max={12}
      value={mounthsValue}
      fieldname="mounths"
      label="Mounths"
    />
  );
};
