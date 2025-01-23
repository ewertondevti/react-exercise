import { Col, Form, Row, Steps, StepsProps } from "antd";
import React from "react";
import { AmountStep } from "./CustomSteps/AmountStep";
import { MounthsStep } from "./CustomSteps/MounthsStep";

const App = () => {
  const items: StepsProps["items"] = [
    {
      title: "Amount",
      description: <AmountStep />,
    },
    {
      title: "Months",
      description: <MounthsStep />,
    },
    {
      title: "Resume",
      description: <></>,
    },
  ];

  return (
    <Row gutter={[10, 10]}>
      <Col span={24}>
        <Form layout="vertical">
          <Steps items={items} />
        </Form>
      </Col>
    </Row>
  );
};

export default App;
