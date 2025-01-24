import { z } from 'zod';

export const formSchema = z.object({
  amount: z.number({ required_error: 'Amount is required field!' }),
  months: z
    .number({ required_error: 'Months is required field!' })
    .min(3, {
      message: 'Minimum 3 months',
    })
    .max(12, {
      message: 'Minimum 12 months',
    }),
});

export type IFormValues = z.infer<typeof formSchema>;
