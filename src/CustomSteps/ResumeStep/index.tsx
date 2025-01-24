import { IFormValues } from '@/models/form';
import { useAppState } from '@/store';
import { Descriptions } from 'antd';
import { useFormContext } from 'react-hook-form';

export const ResumeStep = () => {
  const form = useFormContext();
  const { currency } = useAppState();

  const values = form.getValues() as IFormValues;

  return (
    <Descriptions column={1} bordered>
      <Descriptions.Item label="Amount">
        {values.amount} {currency}
      </Descriptions.Item>

      <Descriptions.Item label="Months">{values.months} months</Descriptions.Item>
    </Descriptions>
  );
};
