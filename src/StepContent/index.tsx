import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Col, Flex, InputNumber, InputNumberProps, Row, Slider } from 'antd';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  min?: number;
  max?: number;
  fieldname: string;
  label: string;
  prefix?: string;
  suffix?: string;
};

export const StepContent: FC<Props> = ({ min, max, fieldname, label, prefix, suffix }) => {
  const { control, watch, setValue } = useFormContext();

  const onInputChange: InputNumberProps['onChange'] = value => setValue(fieldname, value);

  const value = watch(fieldname);

  return (
    <Row>
      <Col flex={1}>
        <FormField
          control={control}
          name={fieldname}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <Flex align="center" gap={10}>
                <FormControl>
                  <Slider {...field} min={min} max={max} className="w-[100%]" />
                </FormControl>

                <InputNumber
                  min={min}
                  max={max}
                  placeholder="0"
                  value={value}
                  onChange={onInputChange}
                  prefix={prefix}
                  suffix={suffix}
                  className="min-w-[120px]"
                />
              </Flex>

              <FormMessage className="text-[red]" />
            </FormItem>
          )}
        />
      </Col>
    </Row>
  );
};
