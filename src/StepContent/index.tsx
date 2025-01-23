import { Col, Form, InputNumber, InputNumberProps, Row, Slider } from "antd";
import React, { FC } from "react";

type Props = {
  min?: number;
  max?: number;
  value: number;
  fieldname: string;
  label: string;
};

export const StepContent: FC<Props> = ({
  min,
  max,
  value,
  fieldname,
  label,
}) => {
  const form = Form.useFormInstance();

  const onInputChange: InputNumberProps["onChange"] = (value) =>
    form.setFieldValue(fieldname, value);

  return (
    <Row>
      <Col span={24}>
        <Form.Item name={fieldname} label={label}>
          <Slider min={min} max={max} />
        </Form.Item>
      </Col>

      <Col>
        <InputNumber
          min={min}
          max={max}
          placeholder="0"
          value={value}
          onChange={onInputChange}
        />
      </Col>
    </Row>
  );
};
