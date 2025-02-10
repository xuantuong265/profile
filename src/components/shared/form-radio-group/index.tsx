import React from "react";
import type { Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Option {
  label: string;
  value: string;
}

interface FormRadioGroupProps {
  name: string;
  options: Option[];
  formLabel?: string;
  className?: string;
  control: Control<any>;
}

const FormRadioGroup = ({
  name,
  options,
  formLabel,
  control,
  className,
  ...rest
}: FormRadioGroupProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>
            <RadioGroup value={field.value} onChange={field.onChange} {...rest}>
              {options.map((option) => (
                <RadioGroupItem key={option.value} value={option.value}>
                  {option.label}
                </RadioGroupItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormRadioGroup;
