"use client";

import React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { type Control } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Typography } from "@/components/shared";

type FormDatePickerProps = Omit<
  React.ComponentProps<typeof Calendar>,
  "selected" | "onSelect" | "mode"
> & { control: Control<any>; name: string; formLabel?: string };

const FormDatePicker = ({
  control,
  name,
  formLabel,
  ...rest
}: FormDatePickerProps) => {
  const { disabled, ...calendarRest } = rest;
  const defaultDisabled = (date: Date) =>
    date > new Date() || date < new Date("1900-01-01");

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <Typography variant="span" className="text-xs">
                      Pick a date
                    </Typography>
                  )}
                  <CalendarIcon className="ml-auto size-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                initialFocus
                disabled={disabled !== undefined ? disabled : defaultDisabled}
                {...calendarRest}
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormDatePicker;
