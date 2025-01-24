import { zodResolver } from '@hookform/resolvers/zod';
import { Col, Flex, notification, Row, StepProps, Steps } from 'antd';
import { ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AmountStep } from './CustomSteps/AmountStep';
import { MounthsStep } from './CustomSteps/MounthsStep';
import { ResumeStep } from './CustomSteps/ResumeStep';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { Form } from './components/ui/form';
import { formSchema, IFormValues } from './models/form';
import { createCreditProcess } from './services/apiService';

interface ICustomStep extends StepProps {
  content: ReactNode;
}

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({ resolver: zodResolver(formSchema) });

  const nextStep = async () => {
    const isValid = await form.trigger(currentStep === 0 ? 'amount' : 'months');

    if (isValid) setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => setCurrentStep(prevStep => prevStep - 1);

  const items: ICustomStep[] = [
    {
      title: 'Amount',
      content: <AmountStep />,
    },
    {
      title: 'Months',
      content: <MounthsStep />,
    },
    {
      title: 'Resume',
      content: <ResumeStep />,
    },
  ];

  const onResetFields = () => {
    form.reset();
    setCurrentStep(0);
  };

  const onSubmit = (values: IFormValues) =>
    createCreditProcess(values).then(({ ok }) => {
      if (ok) {
        notification.success({ message: 'Data sent successfully!' });
        onResetFields();
      } else notification.error({ message: 'There was an error when trying send data!' });
    });

  return (
    <Row gutter={[10, 10]}>
      <Col span={24}>
        <Flex justify="center">
          <Card className="w-[600px] mt-[20px] border-(--border) rounded-(--radius) p-[20px]">
            <CardHeader>
              <CardTitle className="text-[28px] text-center">Credit Simulator</CardTitle>
              <CardDescription className="text-center">Simulate your credit immediately</CardDescription>
            </CardHeader>

            <CardContent className="grid gap-[10px] my-[20px]">
              <Steps items={items} current={currentStep} />

              <Form {...form}>
                <form>
                  <div className="my-[20px]">{items[currentStep]?.content}</div>
                </form>
              </Form>
            </CardContent>

            <CardFooter className="flex justify-end gap-[10px]">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  className="px-[10px] py-[5px] rounded-(--radius) hover:cursor-pointer hover:opacity-50"
                  onClick={prevStep}
                >
                  Back
                </Button>
              )}

              {currentStep < items.length - 1 && (
                <Button
                  variant="outline"
                  className="px-[10px] py-[5px] rounded-(--radius) border-[#1677ff] bg-[#1677ff] text-[white] hover:cursor-pointer hover:opacity-50"
                  onClick={nextStep}
                >
                  Next
                </Button>
              )}

              {currentStep === items.length - 1 && (
                <Button
                  variant="outline"
                  className="px-[10px] py-[5px] rounded-(--radius) border-[#1677ff] bg-[#1677ff] text-[white] hover:cursor-pointer hover:opacity-50"
                  onClick={form.handleSubmit(onSubmit)}
                >
                  Submit
                </Button>
              )}
            </CardFooter>
          </Card>
        </Flex>
      </Col>
    </Row>
  );
};

export default App;
