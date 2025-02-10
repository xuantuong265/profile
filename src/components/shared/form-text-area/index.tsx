"use client";

import React from "react";
import { type Control } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

type FormTextAreaProps = React.ComponentProps<typeof Textarea> & {
  control: Control<any>;
  name: string;
  formLabel?: string;
};

const FormTextArea = ({
  control,
  name,
  formLabel,
  className,
  ...rest
}: FormTextAreaProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <FormControl>
            <Textarea {...field} {...rest} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextArea;
